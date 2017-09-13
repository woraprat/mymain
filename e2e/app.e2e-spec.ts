import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';
const inputEx1 = element(by.xpath('/html/body/app-root/app-rightbar/div/table/tbody/tr[1]/td/input'));
const inputEx2 = element(by.xpath('/html/body/app-root/app-rightbar/div/table/tbody/tr[2]/td/input'));

describe('payan3 App', function() {
  browser.get('http://localhost:4200/');
  //navbar
  it('Should click correct navbar',function(){
    element(by.xpath('/html/body/app-root/app-navbar/nav/div/div[1]/a')).click(); //logo
    browser.sleep(1000);
    element(by.xpath('//*[@id="myNavbar"]/ul/li[1]/a')).click(); //contract
    browser.sleep(1000);
    element(by.xpath('//*[@id="myNavbar"]/ul/li[2]/a')).click(); //security
    browser.sleep(1000);
    element(by.xpath('//*[@id="myNavbar"]/ul/li[3]/a')).click(); //help
    browser.sleep(1000);
    element(by.xpath('//*[@id="myNavbar"]/ul/li[4]/a')).click(); //mail
    browser.sleep(1000);
    element(by.xpath('//*[@id="myNavbar"]/ul/li[5]/a')).click(); //notification
    browser.sleep(1000);
    element(by.xpath('//*[@id="myNavbar"]/ul/li[6]/a')).click(); //setting
    browser.sleep(1000);
    element(by.xpath('//*[@id="myNavbar"]/ul/li[7]/a')).click(); //logout
    browser.sleep(1000);
    
  });
    //leftbar
  it('Should click correct leftbar',function(){
      element(by.xpath('/html/body/app-root/app-leftbar/div/a/font')).click(); //manage wallet
      browser.sleep(1000);
      element(by.xpath('/html/body/app-root/app-leftbar/div/ul/li[1]')).click(); //main
      browser.sleep(1000);
      element(by.xpath('//*[@id="list"]/a')).click(); //topup
      browser.sleep(1000);
      element(by.xpath('//*[@id="list"]/a')).click(); //transfer
      browser.sleep(1000);
      element(by.xpath('//*[@id="list"]/a')).click(); //withdraw
      browser.sleep(1000);
      element(by.xpath('//*[@id="list"]/a')).click(); //Request
      browser.sleep(1000);
      element(by.xpath('//*[@id="list"]/a')).click(); //gift
      browser.sleep(1000);
  });
    // main 
  it('Should click correct main',function(){
      element(by.xpath('//*[@id="btn1"]')).click(); //transection
      browser.sleep(1000);
      element(by.xpath('/html/body/app-root/app-main/div/div/div/div/button[2]')).click(); //topup
      browser.sleep(1000);
      element(by.xpath('/html/body/app-root/app-main/div/div/div/div/button[3]')).click(); //transfer
      browser.sleep(1000);
      element(by.xpath('/html/body/app-root/app-main/div/div/div/div/button[4]')).click(); //withdraw
      browser.sleep(1000);
      element(by.xpath('/html/body/app-root/app-main/div/div/div/div/button[5]')).click(); //Request
      browser.sleep(1000);
      element(by.xpath('/html/body/app-root/app-main/div/div/div/div/button[6]')).click(); //gift
      browser.sleep(1000);

      element(by.xpath('/html/body/app-root/app-main/div/div/div/div/div[1]/div[1]/select')).click(); //select
      browser.sleep(1000);
      element(by.xpath('//*[@id="datepicker"]')).click(); //select
      browser.sleep(1000);
      element(by.xpath('//*[@id="date"]')).click(); //select
      browser.sleep(1000);

      element(by.xpath('/html/body/app-root/app-main/div/div/div/div/div[2]/a[1]')).click(); //select
      browser.sleep(1000);
      element(by.xpath('/html/body/app-root/app-main/div/div/div/div/div[2]/a[2]')).click(); //select
      browser.sleep(1000);
      element(by.xpath('/html/body/app-root/app-main/div/div/div/div/div[2]/a[3]')).click(); //select
      browser.sleep(1000);
  });
  //right-bar
  it('Should click correct rightbar',function(){
    element(by.xpath('/html/body/app-root/app-rightbar/div/tbody/tr[1]/a')).click(); //visa
    browser.sleep(1000);
    element(by.xpath('/html/body/app-root/app-rightbar/div/tbody/tr[2]/a')).click(); //mastercard
    browser.sleep(1000);
    element(by.xpath('/html/body/app-root/app-rightbar/div/a[1]')).click(); //add new bank
    browser.sleep(1000);
    inputEx1.sendKeys('1');//inputEx1
    browser.sleep(1000);
    element(by.xpath('/html/body/app-root/app-rightbar/div/table/tbody/tr[1]/div/tbody/tr/select')).click(); //select1
    browser.sleep(1000);
    inputEx2.sendKeys('33.27') //inputEx2
    browser.sleep(1000);
    element(by.xpath('/html/body/app-root/app-rightbar/div/table/tbody/tr[2]/div/tbody/tr/select')).click(); //select2
    browser.sleep(1000);
    element(by.xpath('/html/body/app-root/app-rightbar/div/a[2]')).click(); //currency
    browser.sleep(1000);
    
  });
});
