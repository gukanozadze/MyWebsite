from django.core import serializers
from django.shortcuts import render, redirect
from .models import Chart
from .forms import ChartForm



def home(request):
    chartData = Chart.objects.all()
    
    if request.method == 'POST':
        form = ChartForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ChartForm()

    return render(request, 'mainApps/home.html', {'chartData': chartData, 'form': form})


def addChart(request):
    if request.method == 'POST':
        form = ChartForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ChartForm()

    return render(request, 'mainApps/chartForm.html', {'form': form})


def chartsAPI(request):
    charts = Chart.objects.all()
    return render(request, 'mainApps/chartsAPI.html', {'charts': charts})