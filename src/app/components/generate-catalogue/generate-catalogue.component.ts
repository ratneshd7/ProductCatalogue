import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ConstantService } from 'src/app/services/constant.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';
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
  @ViewChild('productCatlogue', { static: false }) productCatlogue: ElementRef;
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

  }

  getPdfFile() {
    //let data = document.getElementById('productCatlogue');
    let data=this.productCatlogue.nativeElement;
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
      console.log(PDF_Width,PDF_Height);
      var canvas_image_width = HTML_Width;
      var canvas_image_height = HTML_Height;
      console.log(canvas_image_width,canvas_image_height);
      
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
}
