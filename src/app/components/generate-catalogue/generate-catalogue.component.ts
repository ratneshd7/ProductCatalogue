import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ConstantService } from 'src/app/services/constant.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';
import htmlToPdfmake from 'html-to-pdfmake';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
// var pdfMake = require("pdfmake/build/pdfmake");
// var pdfFonts = require("pdfmake/build/vfs_fonts");
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
//var htmlToPdfmake = require("html-to-pdfmake");
@Component({
  selector: 'app-generate-catalogue',
  templateUrl: './generate-catalogue.component.html',
  styleUrls: ['./generate-catalogue.component.css']
})
export class GenerateCatalogueComponent implements OnInit {

  exhibitorListDTO = [];
  internationalExhibitorList = [];
  governmentExhibitorList = [];
  privateExhibitorList = [];
  public documentDetails:any={
    content: [{
      text: 'Product Catalogue',
      bold: true,
      fontSize: 20,
      style:'mainHeader',
      alignment: 'center',
      margin: [0, 0, 0, 20],
      color:'blue',
      background:'yellow'
    },
    {
      text: 'International Product',
      bold: true,
    },
    {
      image: this.constantService.imageUrl ,
      width: 100,
      alignment : 'right'
    },
    {
      columns: [
        [{
          text:'descripion'+this.constantService.description,
          style: 'name'
        }
      ,{
        image: this.constantService.imageUrl ,
        width: 100,
        alignment : 'right'
      }],
        [{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
        ,[{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
        ,[{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
      ]
    },
    {
      text: 'Product Catalogue',
      bold: true,
      fontSize: 20,
      alignment: 'center',
      margin: [0, 0, 0, 20]
    },
    {
      text: 'International Product',
      bold: true,
    },
    {
      image: this.constantService.imageUrl ,
      width: 100,
      alignment : 'right'
    },
    {
      columns: [
        [{
          text:'descripion'+this.constantService.description,
          style: 'name'
        }
      ,{
        image: this.constantService.imageUrl ,
        width: 100,
        alignment : 'right'
      }],
        [{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
        ,[{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
        ,[{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
      ]
    },
    {
      text: 'Product Catalogue',
      bold: true,
      fontSize: 20,
      alignment: 'center',
      margin: [0, 0, 0, 20]
    },
    {
      text: 'International Product',
      bold: true,
    },
    {
      image: this.constantService.imageUrl ,
      width: 100,
      alignment : 'right'
    },
    {
      columns: [
        [{
          text:'descripion'+this.constantService.description,
          style: 'name'
        }
      ,{
        image: this.constantService.imageUrl ,
        width: 100,
        alignment : 'right'
      }],
        [{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
        ,[{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
        ,[{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
      ]
    },
    {
      text: 'Product Catalogue',
      bold: true,
      fontSize: 20,
      alignment: 'center',
      margin: [0, 0, 0, 20]
    },
    {
      text: 'International Product',
      bold: true,
    },
    {
      image: this.constantService.imageUrl ,
      width: 100,
      alignment : 'right'
    },
    {
      columns: [
        [{
          text:'descripion'+this.constantService.description,
          style: 'name'
        }
      ,{
        image: this.constantService.imageUrl ,
        width: 100,
        alignment : 'right'
      }],
        [{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
        ,[{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
        ,[{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
      ]
    },
    {
      text: 'Product Catalogue',
      bold: true,
      fontSize: 20,
      alignment: 'center',
      margin: [0, 0, 0, 20]
    },
    {
      text: 'International Product',
      bold: true,
    },
    {
      image: this.constantService.imageUrl ,
      width: 100,
      alignment : 'right'
    },
    {
      columns: [
        [{
          text:'descripion'+this.constantService.description,
          style: 'name'
        }
      ,{
        image: this.constantService.imageUrl ,
        width: 100,
        alignment : 'right'
      }],
        [{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
        ,[{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
        ,[{
          text:'descripion'+this.constantService.description,
          style: 'name'
        },{
          image: this.constantService.imageUrl ,
          width: 100,
          alignment : 'right'
        }]
      ]
    }],  
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 20, 0, 10],
        decoration: 'underline'
      },
      name: {
        fontSize: 16,
        bold: true
      },
      jobTitle: {
        fontSize: 14,
        bold: true,
        italics: true
      },
      sign: {
        margin: [0, 50, 0, 10],
        alignment: 'right',
        italics: true
      },
      tableHeader: {
        bold: true,
      },
      mainHeader:{
        width:100,
        backgroundcolor:'green',
        border:1,
      }
    }
  }
  //@ViewChild('productCatlogue', { static: false }) productCatlogue: ElementRef;
  constructor(private constantService: ConstantService,
    private ngxService: NgxUiLoaderService
  ) {

  }

  ngOnInit() {
    let j = 1;
    //this.getData(j);
   
    this.getInternationalExhibitorList();
  }

  getData(j) {
    this.ngxService.start();
    this.constantService.getExhibitorBookingListByEventId("ba43f7e7-2888-44f8-9151-1d594adcdc7e", 100, j)
      .then((result) => {
        if (result.totalCount == 0 || result.totalPages == 0) {
          alert("No Data Found!");
          this.ngxService.stop();
        } else {
          this.exhibitorListDTO = this.exhibitorListDTO.concat(result.listOfExhibitorDTO);
          if (j < result.totalPages) {
            j++;
            this.getData(j);
          }
          else {
            console.log(this.exhibitorListDTO);
            this.getInternationalExhibitorList();
            this.ngxService.stop();
          }
        }
      }).catch((error) => {
        console.log(error);
        this.ngxService.stop();

      })
  }

  
  getInternationalExhibitorList() {
    this.internationalExhibitorList = [];
    for (let i = 0; i < this.exhibitorListDTO.length; i++) {
      if (this.exhibitorListDTO[i].exhibitorDTO.country.name != "India") {
        this.internationalExhibitorList.push(this.exhibitorListDTO[i]);
      }
    }
    this.internationalExhibitorList = this.constantService.internationalExhibitorlist;
    console.log(this.internationalExhibitorList);

    for (let i = 0; i < this.internationalExhibitorList.length; i++) {

    }
  }

  getPdfFile() {
    let data = document.getElementById('productCatlogue');
    //let data=this.productCatlogue.nativeElement;
    console.log(data);

    var HTML_Width = data.clientWidth * 3;
    var HTML_Height = data.clientHeight * 3;
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;
    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas(data).then(canvas => {

      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
      for (var i = 1; i <= totalPDFPages; i++) {
        pdf.addPage([PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
      }
      pdf.save('ProductCatalogue.pdf');
    })
  }

  getPdf() {
    setTimeout(function () {
      let data = document.getElementById('productCatlogue');
      console.log(data);
      console.log(data.clientWidth);
      console.log(data.clientHeight);


      var HTML_Width = data.clientWidth * 3;
      var HTML_Height = data.clientHeight * 3;
      console.log(HTML_Width);
      console.log(HTML_Height);

      var top_left_margin = 2;
      var PDF_Width = HTML_Width + (top_left_margin * 1.5);


      var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 1.2);
      console.log(PDF_Width, PDF_Height);
      var canvas_image_width = HTML_Width;
      var canvas_image_height = HTML_Height;
      console.log(canvas_image_width, canvas_image_height);

      var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
      console.log(totalPDFPages);

      html2canvas(data).then(canvas => {
        console.log(canvas);

        var imgData = canvas.toDataURL("image/jpeg");
        console.log(imgData);

        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) {
          pdf.addPage([PDF_Width, PDF_Height]);
          pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
        }
        pdf.save('ProductCatalogue.pdf');

      });
    }, 300)
  }

  getHtml2Pdf() {
    let data = document.getElementById('productCatlogue');
    //let data=this.productCatlogue.nativeElement;

    setTimeout( ()=> {
      var val = htmlToPdfmake(data.outerHTML);
      console.log(val);
      var dd = { content: this.documentDetails.content };
      
      
      console.log(this.documentDetails);
      
      pdfMake.createPdf(dd).download();
    }, 1000);
  }

  getBase64Img() {
    return 'assets/ProductImg/WOODEN CLOCK.jpg';
  }
}
