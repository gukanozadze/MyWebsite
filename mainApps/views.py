from django.core import serializers
from django.shortcuts import render, redirect
from .models import Chart
from .forms import ChartForm



def charts(request):
    chartData = Chart.objects.all()
    
    if request.method == 'POST':
        form = ChartForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('charts')
    else:
        form = ChartForm()

    return render(request, 'mainApps/charts.html', {'pieChartData': chartData, 'form': form, 'title': 'Charts'})


def addChart(request):
    if request.method == 'POST':
        form = ChartForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('charts')
    else:
        form = ChartForm()

    return render(request, 'mainApps/chartForm.html', {'form': form})


def chartsAPI(request):
    charts = Chart.objects.all()
    return render(request, 'mainApps/chartsAPI.html', {'charts': charts})

def projects(request):
    return render(request, 'mainApps/projects.html', {'title': 'Projects'})


# UPWORK 
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