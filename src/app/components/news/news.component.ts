import {Component, OnInit} from '@angular/core';
declare const imageLabel: any;
import * as $ from 'jquery';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public title = '我是新闻组件,b变量为title';
  msg = '我司一个msg类型的变量';
  public username = '我是一个学生的变量 username为变量名，类型为string';
  public student = '公共的string类型的数据变量';
  // 只定义属性，不赋值，可以在构造方法中赋值
  public message: any;
  public userInfo: object = {
    username: '张三',
    age: '24',
    sex: 'man'
  };



  public content = '<h2>我是一个html标签</h2>';

  public arr = [1111, 2222, 3333, 4444, 55555, 6666, 777];
  public list: any[] = ['我是第一个新屋', 2222, '第三个新闻', 4444, 55555, 6666, 777];
  // tslint:disable-next-line:ban-types
  public Items: Array<String> = ['我是第一个新屋', '第三个新闻'];

  public userlist: any[] = [
    {
      username: '张三',
      age: '21'
    },
    {
      username: '李四',
      age: '23'
    },
    {
      username: '王五',
      age: '24'
    },
    {
      username: '赵柳',
      age: '20'
    },
  ];

  public cars: any[] = [
    {
      category: '宝马',
      list: [{
        title: '宝马x1',
        price: '25W'
      },
        {
          title: '宝马x2',
          price: '35W'
        },
        {
          title: '宝马x3',
          price: '45W'
        },
        {
          title: '宝马x4',
          price: '55W'
        },
      ]},
    {
        category: '奥迪',
      list: [{
        title: '奥迪qa1',
        price: '65W'
      },
        {
          title: '奥迪qa2',
          price: '75W'
        },
        {
          title: '奥迪qa3',
          price: '85W'
        },
        {
          title: '奥迪qa4',
          price: '95W'
        },
      ]
    }
  ];


  constructor() {
    // 改变一个变量的值
    this.message = '在构造方法中，通过this.message给变量message赋值';

    // 获取一个变量的值
    console.log(this.username);
  }

  ngOnInit() {
    $('#myImg').on('mouseover', (e) => {
      e.preventDefault();
      const $imageLabel =  imageLabel({
        // img: $('[name=src]').val(),
        // 图片地址
        img: '../../../assets/img/carNum.jpg',
        only: false,
        editPop: true, // 修改内容弹窗

        close:  (d) => {
          if (d.length) {
            alert(JSON.stringify(d));
          }
          return true;
        },
        clickArea:  () => { // 点击选区事件

        },
        edit:  ($d) => {
          console.log($d);
        },
        startArea:  () => { //  开始绘制事件

        },
        confirm:  (d) => { // 确定按钮
          if (d.length) {
            alert(JSON.stringify(d));
          }
          return true;
        }
      });
    });
  }

}
