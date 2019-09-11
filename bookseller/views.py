from django.shortcuts import render

def mysite(request):
    return render(request, 'bookseller/bookseller.html')

