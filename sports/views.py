from django.shortcuts import render

# Sport 
def addcity(request):
    return render(request, 'mainApps/addcity.html')

def login(request):
    return render(request, 'mainApps/login.html')

def addsport(request):
    return render(request, 'mainApps/addsport.html')

def citydetails(request):
    return render(request, 'mainApps/citydetails.html')

def addcategory(request):
    return render(request, 'mainApps/addcategory.html')

def Dashboard(request):
    return render(request, 'mainApps/dashboard.html')

def viewall(request):
    return render(request, 'mainApps/viewall.html')

def popup(request):
    return render(request, 'mainApps/popup.html')

def foodPage(request):
    return render(request, 'mainApps/foodPage.html')
