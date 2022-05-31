// ==UserScript==
// @name         CHD__Auto_Judge_Educate
// @namespace    https://github.com/zys-chd/CHD__Auto_Judge_Educate
// @version      0.1
// @description  长安大学教务系统自动评教
// @author       zys
// @match        http://bkjw.chd.edu.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chd.edu.cn
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);

(function () {
    'use strict';

    // Your code here...
    // while(window.location.href!="http://bkjw.chd.edu.cn/eams/quality/stdEvaluate.action") {
    // if (window.location.href=="http://bkjw.chd.edu.cn/eams/quality/stdEvaluate.action") {
    //     break;
    // }
    // }

    // 添加按钮并设置回调函数
    var TampermonkeyButton = document.createElement("button");
    TampermonkeyButton.id = "TampermonkeyButton";
    TampermonkeyButton.textContent = "一键评教";
    TampermonkeyButton.style.width = "120px";
    TampermonkeyButton.style.height = "50px";
    TampermonkeyButton.style.align = "center";

    TampermonkeyButton.onclick = ThisMain;

    var banner = document.getElementsByClassName("banner")[0];
    banner.appendChild(TampermonkeyButton);

    // window.onload = load;
})();

// function log(any str) {
//     console.log(str)
// }


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function ThisMain() {

    check(); // 第一版不想努力了，还要手动点进去。。。。

    // console.log("1");
    // let hrefList = document.getElementsByClassName("eval"); // 获取每个需要评教的对象如教师名称
    // console.log(hrefList.length)
    // for (let index = 0; index < hrefList.length; index++) {
    //     console.log("2");
    //     hrefList[index].click();// 点击评教


    // setTimeout(() => function () {
    //     let judgeOptions = document.getElementsByClassName("option-radio"); // 获取所有可以选择的对象如选择框，输入框
    //     let temp = 0;
    //     console.log("3");
    //     console.log(judgeOptions.length)
    //     for (let i = 0; i < 10; i++) {
    //         judgeOptions[temp].click();
    //         temp = temp + 5;
    //     }
    //     console.log("4");
    //     let inputText = document.getElementsByClassName("answer");
    //     for (let j = 0; j < inputText.length; j++) {
    //         inputText[j].value = "无";
    //     }
    //     console.log("5");
    //     document.getElementById("sub").click();
    // }, 1000)


    return 0;
}

function check() {
    let judgeOptions = document.getElementsByClassName("option-radio"); // 获取所有可以选择的对象如选择框，输入框
    let temp = 0;
    console.log("3");
    console.log(judgeOptions.length);
    for (let i = 0; i < 10; i++) {
        judgeOptions[temp].click();
        temp = temp + 5;
    }
    console.log("4");
    let inputText = document.getElementsByClassName("answer");
    for (let j = 0; j < inputText.length; j++) {
        inputText[j].value = "无";
    }
    console.log("5");
    sleep(200).then(()=>{
        document.getElementById("sub").click();
    })
    return 0;
}
