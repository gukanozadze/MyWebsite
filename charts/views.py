from django.shortcuts import render, redirect
from .models import Chart
from .forms import ChartForm


def charts(request):
    chartData = Chart.objects.all()
    
    if request.method == 'POST':
        form = ChartForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('charts-page')
    else:
        form = ChartForm()

    return render(request, 'charts/charts.html', {'pieChartData': chartData, 'form': form, 'title': 'Charts'})


def addChart(request):
    if request.method == 'POST':
        form = ChartForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('charts')
    else:
        form = ChartForm()

    return render(request, 'charts/chartForm.html', {'form': form})