from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    username = "shake"
    con = {"usernam" : username}
    return render(request, "app/index.html",context = con)

def mypage(request):
    return render(request, "app/mypage.html")

def game(request):
    return render(request, "app/suikagame.html")

def renshu(request):
    return render(request, "app/renshu.html")

def university(request):
    return render(request, "app/uni.html")

def department(request):
    return render(request, "app/department.html")