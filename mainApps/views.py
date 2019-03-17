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