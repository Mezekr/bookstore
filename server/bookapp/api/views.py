from rest_framework.decorators import api_view
from .models import Book
from rest_framework.response import Response
from .serializer import BookSerializer


# Create your views here.
@api_view(['GET'])
def get_books(request):
    books = Book.objects.all()
    serialized_data= BookSerializer(books, many=True).data
    return Response(serialized_data)
    
