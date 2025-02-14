from rest_framework.decorators import api_view
from .models import Book
from rest_framework.response import Response
from .serializer import BookSerializer
from rest_framework import status


# Create your views here.
@api_view(['GET'])
def get_books(request):
    books = Book.objects.all()
    serialized_data= BookSerializer(books, many=True).data
    return Response(serialized_data)
    
@api_view(['POST'])
def create_book(request):
    
    serialized_data= BookSerializer(data= request.data)
    if serialized_data.is_valid():
        serialized_data.save()
        return Response(serialized_data.data, status=status.HTTP_201_CREATED)
    return Response(serialized_data.error, status=status.HTTP_400_BAD_REQUEST)

@api_view(["PUT","DELETE"])
def update_book(request, pk):
    try:
        book = Book.objects.get(pk=pk)
    except Book.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
        
    if request.method == "PUT":
        serialized_data = BookSerializer(book, data=request.data)
        if serialized_data.is_valid():
            serialized_data.save()
            return Response(serialized_data.data)
        return Response(serialized_data.errors, status= status.HTTP_400_BAD_REQUEST)
    
    elif request.method =="DELETE":
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
