import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  //http://gsmktg.azurewebsites.net:80/api/v1/organizers/96b337e2-892d-4ae3-90f7-e29d4317681b/BookingListing/ba43f7e7-2888-44f8-9151-1d594adcdc7e/5/1

  baseUrl = "http://gsmktg.azurewebsites.net:80/api/v1/organizers/96b337e2-892d-4ae3-90f7-e29d4317681b/";

  constructor(private http: HttpClient) { }

  getExhibitorBookingListByEventId(eventId,pageNo,pageSize): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+"BookingListing/"+eventId+"/"+pageNo+"/"+pageSize, { responseType: 'json' })
        .toPromise()
        .then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error)
        })
    })
  }



  internationalExhibitorlist=[
    {
      "bookingId": "73a8c32e-681b-4af3-aa06-3a3947b75642",
      "bookingDate": "27-01-2021",
      "bookingReferenceId": "PAN0112",
      "companyName": "Awista Natural Dry Fruit Afghanistan",
      "stallCount": 2,
      "totalAmount": "0",
      "receivedAmount": 0,
      "pendingAmount": 0,
      "comment": "",
      "stallSize": 18,
      "mccAmount": 0,
      "cardPaymentAmount": 90325,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 0,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 1100,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "a39d730f-b891-4d1f-9104-e68f1215c006",
        "name": "Md. Nasir",
        "emailId": "noemail@test.com",
        "phoneNo": "7982165911",
        "companyName": "Awista Natural Dry Fruit Afghanistan",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "Kabul",
        "pinCode": 0,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": "",
        "panNo": "",
        "passportNo": "",
        "aadhaarNo": "",
        "otpCode": "886688",
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": "",
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "ab007e76-845f-4842-a050-19637fa0df44",
          "industryType": "International-Food",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "1af1cae0-06b0-4dfc-9977-102759aeffe4",
          "type": "Private",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "1156a2c6-09a8-47cd-910c-52dc614614db",
          "name": "Afghanistan",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "50b3f484-ef6b-4bb1-8f61-bee9db3b594c",
          "userName": "chidrupshah",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [
          {
            "id": "59f98de3-1b88-464e-9376-44af859accc0",
            "name": "Dry Fruits",
            "description": "Dry Fruits",
            "exhibitorIndustryTypeDTO": null
          }
        ],
        "productsDTO": [
          {
            "id": "c164c4d4-fd10-4d77-b04b-357bb8f09750",
            "productName": "Fig",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 3000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "d7869e65-95fb-4319-997a-5cf83f6d79f7",
            "productName": "Apricot",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 3000,
            "minPrice": 900,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "3620a5f8-bd48-4b58-b69f-97e3f98eaf04",
            "productName": "Dates",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 3000,
            "minPrice": 900,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "dacf2bb8-1761-4e13-b0aa-42cce823951a",
            "productName": "Raisins",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 3000,
            "minPrice": 800,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": null,
              "key": 0,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "a5f3cddf-7f90-48ac-a775-69c8fe749502",
            "productName": "Walnuts",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 3000,
            "minPrice": 900,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "4d4295c2-c355-4d36-9fc6-456931b3c98a",
            "productName": "Almonds",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 3000,
            "minPrice": 700,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 115,
          "stallSize": null
        },
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 116,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "bd169845-fc3f-45b7-8ef5-1a36506fbafb",
          "type": "Car Owners"
        },
        {
          "id": "f88211fc-d2c8-44f5-adda-5105e907db95",
          "type": "HNI"
        },
        {
          "id": "824a3be8-f956-43fc-a781-590b09cf4874",
          "type": "Club"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        },
        {
          "id": "5157c9c2-3dbc-41a5-a81d-ac833e32c6bf",
          "type": "Credit Card Holders"
        },
        {
          "id": "3f12cd4d-e6f5-40fc-8b73-d33a516991d9",
          "type": "Frequent Flyer"
        }
      ]
    },
    {
      "bookingId": "40cc0ba1-b525-49b5-b910-e79199798cf4",
      "bookingDate": "25-01-2021",
      "bookingReferenceId": "PAN0107",
      "companyName": "MAD Tunisia",
      "stallCount": 1,
      "totalAmount": "0",
      "receivedAmount": 0,
      "pendingAmount": 0,
      "comment": "",
      "stallSize": 30,
      "mccAmount": 0,
      "cardPaymentAmount": 0,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 0,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 500,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "a03ed153-f72c-43c8-a90b-242f8b9b2170",
        "name": "Kaabi fawzi",
        "emailId": "kaabi.fawzi@yahoo.fr",
        "phoneNo": "21621719752",
        "companyName": "MAD Tunisia",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "14 janvier kairouan tunisia",
        "pinCode": 0,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": "",
        "panNo": "",
        "passportNo": "",
        "aadhaarNo": "",
        "otpCode": "361562",
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": "",
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "af01e040-4edf-41f2-bdee-ef97ed78188c",
          "industryType": "International-Lifestyle",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "1af1cae0-06b0-4dfc-9977-102759aeffe4",
          "type": "Private",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "ce7509ac-3c9b-4c2e-8c9f-e3a838e85e6b",
          "name": "Tunisia",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "50b3f484-ef6b-4bb1-8f61-bee9db3b594c",
          "userName": "chidrupshah",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [
          {
            "id": "4fc7836b-a8a0-4267-9ba0-c957b6980ccd",
            "name": "Handicrafts",
            "description": "Handicrafts",
            "exhibitorIndustryTypeDTO": null
          }
        ],
        "productsDTO": [
          {
            "id": "74df9474-3a75-49e3-ae75-adc053bf1244",
            "productName": "Crockery",
            "iimtfProductId": "",
            "hsnCode": "6912",
            "exhibitorCount": 0,
            "maxPrice": 1500,
            "minPrice": 300,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "82841610-1386-494e-b5c3-3474ce583f7f",
              "name": "Kitchen toolset",
              "description": "Kitchen toolset",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "0ced1063-f446-43db-9849-065f4468be46",
              "industryType": "kitchen appliances",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "c49e9f90-412f-4ab4-9b21-d8ab08faa461",
            "productName": "Bag",
            "iimtfProductId": "",
            "hsnCode": "42023120",
            "exhibitorCount": 0,
            "maxPrice": 10000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "aadfbd57-ece4-45fd-8390-be3d725e3173",
              "name": "Bags, wallets and belts",
              "description": "Bags, wallets and belts",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "de4cc2d0-1161-4e8a-be31-b9c1361c09df",
              "industryType": "Lifestyle",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "8b3c22ce-6d70-4888-9b3a-88c1be8f98ef",
            "productName": "Show Piece",
            "iimtfProductId": "",
            "hsnCode": "68159990",
            "exhibitorCount": 0,
            "maxPrice": 9000,
            "minPrice": 700,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "6fb42b18-6bc2-4143-97b0-65950c9a1db7",
              "name": "Statues & Showpiece",
              "description": "Statues & Showpiece",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "1244b450-ba97-448f-bded-4e87055b096b",
              "industryType": "Interior",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 134,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "af6c30b7-ac59-4237-921e-1f28318c14c2",
          "type": "Kids Playschool"
        },
        {
          "id": "f88211fc-d2c8-44f5-adda-5105e907db95",
          "type": "HNI"
        },
        {
          "id": "824a3be8-f956-43fc-a781-590b09cf4874",
          "type": "Club"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        },
        {
          "id": "5157c9c2-3dbc-41a5-a81d-ac833e32c6bf",
          "type": "Credit Card Holders"
        },
        {
          "id": "3f12cd4d-e6f5-40fc-8b73-d33a516991d9",
          "type": "Frequent Flyer"
        }
      ]
    },
    {
      "bookingId": "218ec35d-c0d6-4db1-80a8-0ade07d86f28",
      "bookingDate": "25-01-2021",
      "bookingReferenceId": "PAN0105",
      "companyName": "Ghoryan Saffron Company Afghanistan",
      "stallCount": 1,
      "totalAmount": "0",
      "receivedAmount": 0,
      "pendingAmount": 0,
      "comment": "",
      "stallSize": 9,
      "mccAmount": 0,
      "cardPaymentAmount": 73590,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 0,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 500,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "5a8a8863-feee-4eb6-a7bc-14f8bfbb5ba4",
        "name": "Sayeed",
        "emailId": "info@ghoryansaffron.af",
        "phoneNo": "8851165167",
        "companyName": "Ghoryan Saffron Company Afghanistan",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "kabul",
        "pinCode": 0,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": "",
        "panNo": "",
        "passportNo": "",
        "aadhaarNo": "",
        "otpCode": "456567",
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": "",
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "ab007e76-845f-4842-a050-19637fa0df44",
          "industryType": "International-Food",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "1af1cae0-06b0-4dfc-9977-102759aeffe4",
          "type": "Private",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "1156a2c6-09a8-47cd-910c-52dc614614db",
          "name": "Afghanistan",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "50b3f484-ef6b-4bb1-8f61-bee9db3b594c",
          "userName": "chidrupshah",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [
          {
            "id": "59f98de3-1b88-464e-9376-44af859accc0",
            "name": "Dry Fruits",
            "description": "Dry Fruits",
            "exhibitorIndustryTypeDTO": null
          }
        ],
        "productsDTO": [
          {
            "id": "e6d21e7e-c363-46dd-ad5b-cf515ff40c1e",
            "productName": "Saffron",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 10000,
            "minPrice": 250,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 117,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "bd169845-fc3f-45b7-8ef5-1a36506fbafb",
          "type": "Car Owners"
        },
        {
          "id": "f88211fc-d2c8-44f5-adda-5105e907db95",
          "type": "HNI"
        },
        {
          "id": "824a3be8-f956-43fc-a781-590b09cf4874",
          "type": "Club"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        },
        {
          "id": "5157c9c2-3dbc-41a5-a81d-ac833e32c6bf",
          "type": "Credit Card Holders"
        },
        {
          "id": "3f12cd4d-e6f5-40fc-8b73-d33a516991d9",
          "type": "Frequent Flyer"
        }
      ]
    },
    {
      "bookingId": "9b46a55d-dfa1-410f-82d5-0e2ddb6c6d9d",
      "bookingDate": "25-01-2021",
      "bookingReferenceId": "PAN0104",
      "companyName": "High Confidence General Trading Co.( Kamran Shafiq trading ltd )",
      "stallCount": 2,
      "totalAmount": "180540",
      "receivedAmount": 0,
      "pendingAmount": 180540,
      "comment": "",
      "stallSize": 18,
      "mccAmount": 0,
      "cardPaymentAmount": 46450,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 510,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 0,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "f0918e2c-b175-43f7-a6d9-87568c7403e1",
        "name": "Siddiq Ullah Popalzai",
        "emailId": "siddiqullah.popalzai@gmail.com",
        "phoneNo": "777141317",
        "companyName": "High Confidence General Trading Co.( Kamran Shafiq trading ltd )",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "Hesa Seh, Khair Khan, Qadir Bakhshi Medicine Market 4th Floor, Apartment no D-23",
        "pinCode": 1002,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": null,
        "panNo": null,
        "passportNo": null,
        "aadhaarNo": null,
        "otpCode": null,
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": "kabul",
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "ab007e76-845f-4842-a050-19637fa0df44",
          "industryType": "International-Food",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "1af1cae0-06b0-4dfc-9977-102759aeffe4",
          "type": "Private",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "1156a2c6-09a8-47cd-910c-52dc614614db",
          "name": "Afghanistan",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "50b3f484-ef6b-4bb1-8f61-bee9db3b594c",
          "userName": "chidrupshah",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [
          {
            "id": "59f98de3-1b88-464e-9376-44af859accc0",
            "name": "Dry Fruits",
            "description": "Dry Fruits",
            "exhibitorIndustryTypeDTO": null
          }
        ],
        "productsDTO": [
          {
            "id": "a5f3cddf-7f90-48ac-a775-69c8fe749502",
            "productName": "Walnuts",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "Unique",
              "key": 4,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "c164c4d4-fd10-4d77-b04b-357bb8f09750",
            "productName": "Fig",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "Unique",
              "key": 4,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "4d4295c2-c355-4d36-9fc6-456931b3c98a",
            "productName": "Almonds",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "Unique",
              "key": 4,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "d7869e65-95fb-4319-997a-5cf83f6d79f7",
            "productName": "Apricot",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "Unique",
              "key": 4,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "e6d21e7e-c363-46dd-ad5b-cf515ff40c1e",
            "productName": "Saffron",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 300,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "Unique",
              "key": 4,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "3620a5f8-bd48-4b58-b69f-97e3f98eaf04",
            "productName": "Dates",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "Unique",
              "key": 4,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 60,
          "stallSize": null
        },
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 59,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "bd169845-fc3f-45b7-8ef5-1a36506fbafb",
          "type": "Car Owners"
        },
        {
          "id": "f88211fc-d2c8-44f5-adda-5105e907db95",
          "type": "HNI"
        },
        {
          "id": "824a3be8-f956-43fc-a781-590b09cf4874",
          "type": "Club"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        },
        {
          "id": "5157c9c2-3dbc-41a5-a81d-ac833e32c6bf",
          "type": "Credit Card Holders"
        },
        {
          "id": "3f12cd4d-e6f5-40fc-8b73-d33a516991d9",
          "type": "Frequent Flyer"
        }
      ]
    },
    {
      "bookingId": "f8b3d044-aa0e-49af-aeb5-512d34c5356b",
      "bookingDate": "25-01-2021",
      "bookingReferenceId": "PAN0103",
      "companyName": "Noor Khan (Milad Jahoon Sadat Group of Companies)",
      "stallCount": 1,
      "totalAmount": "90270",
      "receivedAmount": 0,
      "pendingAmount": 90270,
      "comment": "",
      "stallSize": 9,
      "mccAmount": 0,
      "cardPaymentAmount": 122835,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 212,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 2300,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "de8b702b-0d15-494b-8cbd-1a27ce0b42d6",
        "name": "Noorullah Stanikzai",
        "emailId": "noorullah.sta786@gmail.com",
        "phoneNo": "9560206406",
        "companyName": "Noor Khan (Milad Jahoon Sadat Group of Companies)",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "Afghanistan",
        "pinCode": 0,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": "",
        "panNo": "",
        "passportNo": "",
        "aadhaarNo": "",
        "otpCode": "784361",
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": "Kabul",
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "ab007e76-845f-4842-a050-19637fa0df44",
          "industryType": "International-Food",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "1af1cae0-06b0-4dfc-9977-102759aeffe4",
          "type": "Private",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "1156a2c6-09a8-47cd-910c-52dc614614db",
          "name": "Afghanistan",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "50b3f484-ef6b-4bb1-8f61-bee9db3b594c",
          "userName": "chidrupshah",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [
          {
            "id": "59f98de3-1b88-464e-9376-44af859accc0",
            "name": "Dry Fruits",
            "description": "Dry Fruits",
            "exhibitorIndustryTypeDTO": null
          }
        ],
        "productsDTO": [
          {
            "id": "d7869e65-95fb-4319-997a-5cf83f6d79f7",
            "productName": "Apricot",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 4500,
            "minPrice": 1200,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "4d4295c2-c355-4d36-9fc6-456931b3c98a",
            "productName": "Almonds",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 4500,
            "minPrice": 1200,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "e6d21e7e-c363-46dd-ad5b-cf515ff40c1e",
            "productName": "Saffron",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 4500,
            "minPrice": 1200,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "c164c4d4-fd10-4d77-b04b-357bb8f09750",
            "productName": "Fig",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 4500,
            "minPrice": 1200,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "a5f3cddf-7f90-48ac-a775-69c8fe749502",
            "productName": "Walnuts",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 4500,
            "minPrice": 1200,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "3620a5f8-bd48-4b58-b69f-97e3f98eaf04",
            "productName": "Dates",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 4500,
            "minPrice": 1200,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "dacf2bb8-1761-4e13-b0aa-42cce823951a",
            "productName": "Raisins",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 4500,
            "minPrice": 1200,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 58,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "bd169845-fc3f-45b7-8ef5-1a36506fbafb",
          "type": "Car Owners"
        },
        {
          "id": "f88211fc-d2c8-44f5-adda-5105e907db95",
          "type": "HNI"
        },
        {
          "id": "824a3be8-f956-43fc-a781-590b09cf4874",
          "type": "Club"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        },
        {
          "id": "5157c9c2-3dbc-41a5-a81d-ac833e32c6bf",
          "type": "Credit Card Holders"
        },
        {
          "id": "3f12cd4d-e6f5-40fc-8b73-d33a516991d9",
          "type": "Frequent Flyer"
        }
      ]
    },
    {
      "bookingId": "c949cd13-0f4c-443a-8016-94b6e9321fa1",
      "bookingDate": "25-01-2021",
      "bookingReferenceId": "PAN0102",
      "companyName": "Bangkok Collection",
      "stallCount": 1,
      "totalAmount": "150450",
      "receivedAmount": 0,
      "pendingAmount": 150450,
      "comment": "",
      "stallSize": 15,
      "mccAmount": 0,
      "cardPaymentAmount": 6200,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 8500,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 70,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "834d052f-60ca-4e86-b228-94b74e643941",
        "name": "parineeta",
        "emailId": "parineeta@gmail.com",
        "phoneNo": "9884064343",
        "companyName": "Bangkok Collection",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "Bangkok",
        "pinCode": 111111,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": null,
        "panNo": null,
        "passportNo": null,
        "aadhaarNo": null,
        "otpCode": null,
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": null,
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "af01e040-4edf-41f2-bdee-ef97ed78188c",
          "industryType": "International-Lifestyle",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "1af1cae0-06b0-4dfc-9977-102759aeffe4",
          "type": "Private",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "2d7a7385-f8f4-495f-958c-d7db7771c1ca",
          "name": "Thailand",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "6f5c7ed1-fdd8-4795-ade8-e79e6c88fe2b",
          "userName": "anupam",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [],
        "productsDTO": [
          {
            "id": "e5a72154-8f74-4633-8182-b6f3ec580587",
            "productName": "Hair bands",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 300,
            "minPrice": 50,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "53823169-1e48-4bcc-b6ad-849f0256149d",
              "name": "Accessories",
              "description": "Accessories",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "de4cc2d0-1161-4e8a-be31-b9c1361c09df",
              "industryType": "Lifestyle",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "c49e9f90-412f-4ab4-9b21-d8ab08faa461",
            "productName": "Bag",
            "iimtfProductId": "",
            "hsnCode": "42023120",
            "exhibitorCount": 0,
            "maxPrice": 1000,
            "minPrice": 50,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "aadfbd57-ece4-45fd-8390-be3d725e3173",
              "name": "Bags, wallets and belts",
              "description": "Bags, wallets and belts",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "de4cc2d0-1161-4e8a-be31-b9c1361c09df",
              "industryType": "Lifestyle",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "ef1180fb-d20a-4415-928e-5dcc7790ff3a",
            "productName": "Pots, Flower vase & Dry Flower",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 1000,
            "minPrice": 300,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "4b33f52e-a393-4ec9-876a-e01a4dd2d723",
              "name": "Home Furnishing",
              "description": "Home Furnishing",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "bca41dca-6194-4ddc-b39c-df7a23e5d5a3",
              "industryType": "Home & Decor",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "94ac98db-e3f7-45f7-826a-35a050807f3b",
            "productName": "Dress material",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 1000,
            "minPrice": 50,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "c40c73c1-3151-40c6-9bee-03609822743a",
              "name": "Clothing",
              "description": "Sarees etc",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "de4cc2d0-1161-4e8a-be31-b9c1361c09df",
              "industryType": "Lifestyle",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 13,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "af6c30b7-ac59-4237-921e-1f28318c14c2",
          "type": "Kids Playschool"
        },
        {
          "id": "4bca682b-788c-4383-97f6-42844450c444",
          "type": "College"
        },
        {
          "id": "3f97fa6e-4291-4fd8-afba-8362e3b50145",
          "type": "School"
        },
        {
          "id": "b1f987ab-e3e2-4a0a-8641-f9d2ebd6c7bf",
          "type": "Salons"
        }
      ]
    },
    {
      "bookingId": "b17d627f-76a5-4b89-9947-87d25ce6943c",
      "bookingDate": "23-01-2021",
      "bookingReferenceId": "PAN0083",
      "companyName": "Zahra (Zahra Afghani Dry Fruits)",
      "stallCount": 1,
      "totalAmount": "90270",
      "receivedAmount": 0,
      "pendingAmount": 90270,
      "comment": null,
      "stallSize": 9,
      "mccAmount": 0,
      "cardPaymentAmount": 73800,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 255,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 2000,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "6d489306-588a-47b3-b03b-4757704a5ddb",
        "name": "Zahra Sadat",
        "emailId": "snk_khadija@yahoo.com",
        "phoneNo": "9582061572",
        "companyName": "Zahra (Zahra Afghani Dry Fruits)",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "Afghanistan",
        "pinCode": 0,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": "",
        "panNo": "",
        "passportNo": "",
        "aadhaarNo": "",
        "otpCode": "772746",
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": "",
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "ab007e76-845f-4842-a050-19637fa0df44",
          "industryType": "International-Food",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "1af1cae0-06b0-4dfc-9977-102759aeffe4",
          "type": "Private",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "1156a2c6-09a8-47cd-910c-52dc614614db",
          "name": "Afghanistan",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "50b3f484-ef6b-4bb1-8f61-bee9db3b594c",
          "userName": "chidrupshah",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [
          {
            "id": "59f98de3-1b88-464e-9376-44af859accc0",
            "name": "Dry Fruits",
            "description": "Dry Fruits",
            "exhibitorIndustryTypeDTO": null
          }
        ],
        "productsDTO": [
          {
            "id": "a5f3cddf-7f90-48ac-a775-69c8fe749502",
            "productName": "Walnuts",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "e6d21e7e-c363-46dd-ad5b-cf515ff40c1e",
            "productName": "Saffron",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "c164c4d4-fd10-4d77-b04b-357bb8f09750",
            "productName": "Fig",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "dacf2bb8-1761-4e13-b0aa-42cce823951a",
            "productName": "Raisins",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "d7869e65-95fb-4319-997a-5cf83f6d79f7",
            "productName": "Apricot",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "3620a5f8-bd48-4b58-b69f-97e3f98eaf04",
            "productName": "Dates",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "4d4295c2-c355-4d36-9fc6-456931b3c98a",
            "productName": "Almonds",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 77,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "bd169845-fc3f-45b7-8ef5-1a36506fbafb",
          "type": "Car Owners"
        },
        {
          "id": "f88211fc-d2c8-44f5-adda-5105e907db95",
          "type": "HNI"
        },
        {
          "id": "824a3be8-f956-43fc-a781-590b09cf4874",
          "type": "Club"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        },
        {
          "id": "5157c9c2-3dbc-41a5-a81d-ac833e32c6bf",
          "type": "Credit Card Holders"
        },
        {
          "id": "3f12cd4d-e6f5-40fc-8b73-d33a516991d9",
          "type": "Frequent Flyer"
        }
      ]
    },
    {
      "bookingId": "c1a6572e-5a1b-4a9a-bdfa-6ac464116408",
      "bookingDate": "23-01-2021",
      "bookingReferenceId": "PAN0065",
      "companyName": "M/S Dhakai Jamdani weaving factory",
      "stallCount": 1,
      "totalAmount": "0",
      "receivedAmount": 0,
      "pendingAmount": 0,
      "comment": null,
      "stallSize": 9,
      "mccAmount": 0,
      "cardPaymentAmount": 38900,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 0,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 0,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "7a8df02a-3e04-47e5-a750-127cf6dd7098",
        "name": "Mohammed ali",
        "emailId": "dhakaijwf@gmail.com",
        "phoneNo": "7550652551",
        "companyName": "M/S Dhakai Jamdani weaving factory",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "Barabo, P.O. Tarabo, P.S. Rupgonj, Narayangomj",
        "pinCode": 1203,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": null,
        "panNo": null,
        "passportNo": null,
        "aadhaarNo": null,
        "otpCode": null,
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": "Dhaka",
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "af01e040-4edf-41f2-bdee-ef97ed78188c",
          "industryType": "International-Lifestyle",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "88cbb753-b085-4693-b9c7-d43837fea6ea",
          "type": "International-Government",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "8aff9174-25a2-4fac-a7b8-da46fb46829b",
          "name": "Bangladesh",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "d161b4ef-4084-448d-9184-908d0e6e167c",
          "userName": "UR",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [
          {
            "id": "c40c73c1-3151-40c6-9bee-03609822743a",
            "name": "Clothing",
            "description": "Sarees etc",
            "exhibitorIndustryTypeDTO": null
          }
        ],
        "productsDTO": [
          {
            "id": "f83122ac-f9d3-4da9-8a3c-3b5b61b545e6",
            "productName": "Saree",
            "iimtfProductId": "",
            "hsnCode": "5210",
            "exhibitorCount": 0,
            "maxPrice": 50000,
            "minPrice": 1500,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "c40c73c1-3151-40c6-9bee-03609822743a",
              "name": "Clothing",
              "description": "Sarees etc",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "de4cc2d0-1161-4e8a-be31-b9c1361c09df",
              "industryType": "Lifestyle",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 119,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "bd169845-fc3f-45b7-8ef5-1a36506fbafb",
          "type": "Car Owners"
        },
        {
          "id": "f88211fc-d2c8-44f5-adda-5105e907db95",
          "type": "HNI"
        },
        {
          "id": "824a3be8-f956-43fc-a781-590b09cf4874",
          "type": "Club"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        },
        {
          "id": "5157c9c2-3dbc-41a5-a81d-ac833e32c6bf",
          "type": "Credit Card Holders"
        },
        {
          "id": "3f12cd4d-e6f5-40fc-8b73-d33a516991d9",
          "type": "Frequent Flyer"
        },
        {
          "id": "b1f987ab-e3e2-4a0a-8641-f9d2ebd6c7bf",
          "type": "Salons"
        }
      ]
    },
    {
      "bookingId": "9d45f14f-6446-49ba-af6c-bfedc8d6179d",
      "bookingDate": "23-01-2021",
      "bookingReferenceId": "PAN0064",
      "companyName": "ELMA Trading & Corporation",
      "stallCount": 2,
      "totalAmount": "0",
      "receivedAmount": 0,
      "pendingAmount": 0,
      "comment": null,
      "stallSize": 18,
      "mccAmount": 0,
      "cardPaymentAmount": 28050,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 0,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 0,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "b015864a-20d6-4c7d-bb21-d9255a3f328b",
        "name": "Md. Tariqul Alam Shadin",
        "emailId": "elmagroup@ymail.com",
        "phoneNo": "88028059002",
        "companyName": "ELMA Trading & Corporation",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "55/4/D East Baishteki mirpur kafrul",
        "pinCode": 0,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": null,
        "panNo": null,
        "passportNo": null,
        "aadhaarNo": null,
        "otpCode": null,
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": "Dhaka",
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "ab007e76-845f-4842-a050-19637fa0df44",
          "industryType": "International-Food",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "88cbb753-b085-4693-b9c7-d43837fea6ea",
          "type": "International-Government",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "8aff9174-25a2-4fac-a7b8-da46fb46829b",
          "name": "Bangladesh",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "d161b4ef-4084-448d-9184-908d0e6e167c",
          "userName": "UR",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [
          {
            "id": "4fc7836b-a8a0-4267-9ba0-c957b6980ccd",
            "name": "Handicrafts",
            "description": "Handicrafts",
            "exhibitorIndustryTypeDTO": null
          }
        ],
        "productsDTO": [
          {
            "id": "e1790b2c-a5e7-4929-bdd5-2c17e76eef5f",
            "productName": "Garments",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 1500,
            "minPrice": 300,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "c40c73c1-3151-40c6-9bee-03609822743a",
              "name": "Clothing",
              "description": "Sarees etc",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "de4cc2d0-1161-4e8a-be31-b9c1361c09df",
              "industryType": "Lifestyle",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 121,
          "stallSize": null
        },
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 120,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "af6c30b7-ac59-4237-921e-1f28318c14c2",
          "type": "Kids Playschool"
        },
        {
          "id": "4bca682b-788c-4383-97f6-42844450c444",
          "type": "College"
        },
        {
          "id": "3f97fa6e-4291-4fd8-afba-8362e3b50145",
          "type": "School"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        }
      ]
    },
    {
      "bookingId": "81aeedd9-06f0-4031-9cdd-aa96e86cf2ba",
      "bookingDate": "23-01-2021",
      "bookingReferenceId": "PAN0063",
      "companyName": "Surovi Jamdani House",
      "stallCount": 1,
      "totalAmount": "0",
      "receivedAmount": 0,
      "pendingAmount": 0,
      "comment": null,
      "stallSize": 9,
      "mccAmount": 0,
      "cardPaymentAmount": 60050,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 0,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 4000,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "10fc070b-bdfa-4eba-8f26-84361ba32ca0",
        "name": "Ariful Islam Kasem",
        "emailId": "a.badshsh94@gmail.com",
        "phoneNo": "01729994394",
        "companyName": "Surovi Jamdani House",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "Jabbar Tower, Road 135,Shop-9 Gulshan",
        "pinCode": 1212,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": null,
        "panNo": null,
        "passportNo": null,
        "aadhaarNo": null,
        "otpCode": null,
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": "Dhakka",
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "f84afeca-bdee-4464-96db-d949a5109f30",
          "industryType": "Handicraft & Handloom",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "88cbb753-b085-4693-b9c7-d43837fea6ea",
          "type": "International-Government",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "8aff9174-25a2-4fac-a7b8-da46fb46829b",
          "name": "Bangladesh",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "d161b4ef-4084-448d-9184-908d0e6e167c",
          "userName": "UR",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [],
        "productsDTO": [
          {
            "id": "f83122ac-f9d3-4da9-8a3c-3b5b61b545e6",
            "productName": "Saree",
            "iimtfProductId": "",
            "hsnCode": "5210",
            "exhibitorCount": 0,
            "maxPrice": 40000,
            "minPrice": 300,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "c40c73c1-3151-40c6-9bee-03609822743a",
              "name": "Clothing",
              "description": "Sarees etc",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "de4cc2d0-1161-4e8a-be31-b9c1361c09df",
              "industryType": "Lifestyle",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 122,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "bd169845-fc3f-45b7-8ef5-1a36506fbafb",
          "type": "Car Owners"
        },
        {
          "id": "f88211fc-d2c8-44f5-adda-5105e907db95",
          "type": "HNI"
        },
        {
          "id": "824a3be8-f956-43fc-a781-590b09cf4874",
          "type": "Club"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        },
        {
          "id": "5157c9c2-3dbc-41a5-a81d-ac833e32c6bf",
          "type": "Credit Card Holders"
        },
        {
          "id": "3f12cd4d-e6f5-40fc-8b73-d33a516991d9",
          "type": "Frequent Flyer"
        },
        {
          "id": "b1f987ab-e3e2-4a0a-8641-f9d2ebd6c7bf",
          "type": "Salons"
        }
      ]
    },
    {
      "bookingId": "fc0da090-536f-4cc0-ae44-96bb71678e59",
      "bookingDate": "23-01-2021",
      "bookingReferenceId": "PAN0062",
      "companyName": "Ardi Jamdani House",
      "stallCount": 1,
      "totalAmount": "0",
      "receivedAmount": 0,
      "pendingAmount": 0,
      "comment": null,
      "stallSize": 9,
      "mccAmount": 0,
      "cardPaymentAmount": 56750,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 0,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 4000,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "7c536584-8be8-4bb0-9755-25633ce4cd7c",
        "name": "Aminul",
        "emailId": "ardijamdani@gmail.com",
        "phoneNo": "88 01912902498",
        "companyName": "Ardi Jamdani House",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "Khadun, Rupshi, Rupganj, Narayanganj,Bangladesh",
        "pinCode": 0,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": "",
        "panNo": "",
        "passportNo": "",
        "aadhaarNo": "",
        "otpCode": "123783",
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": "Narayanganj",
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "af01e040-4edf-41f2-bdee-ef97ed78188c",
          "industryType": "International-Lifestyle",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "1af1cae0-06b0-4dfc-9977-102759aeffe4",
          "type": "Private",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "8aff9174-25a2-4fac-a7b8-da46fb46829b",
          "name": "Bangladesh",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "d161b4ef-4084-448d-9184-908d0e6e167c",
          "userName": "UR",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [],
        "productsDTO": [
          {
            "id": "f83122ac-f9d3-4da9-8a3c-3b5b61b545e6",
            "productName": "Saree",
            "iimtfProductId": "",
            "hsnCode": "5210",
            "exhibitorCount": 0,
            "maxPrice": 12000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "c40c73c1-3151-40c6-9bee-03609822743a",
              "name": "Clothing",
              "description": "Sarees etc",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "de4cc2d0-1161-4e8a-be31-b9c1361c09df",
              "industryType": "Lifestyle",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 123,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "bd169845-fc3f-45b7-8ef5-1a36506fbafb",
          "type": "Car Owners"
        },
        {
          "id": "f88211fc-d2c8-44f5-adda-5105e907db95",
          "type": "HNI"
        },
        {
          "id": "824a3be8-f956-43fc-a781-590b09cf4874",
          "type": "Club"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        },
        {
          "id": "5157c9c2-3dbc-41a5-a81d-ac833e32c6bf",
          "type": "Credit Card Holders"
        },
        {
          "id": "3f12cd4d-e6f5-40fc-8b73-d33a516991d9",
          "type": "Frequent Flyer"
        },
        {
          "id": "b1f987ab-e3e2-4a0a-8641-f9d2ebd6c7bf",
          "type": "Salons"
        }
      ]
    },
    {
      "bookingId": "1e9556c7-29c0-4437-810f-84170912cda2",
      "bookingDate": "23-01-2021",
      "bookingReferenceId": "PAN0052",
      "companyName": "Nadeem Marbles",
      "stallCount": 1,
      "totalAmount": "120360",
      "receivedAmount": 0,
      "pendingAmount": 120360,
      "comment": null,
      "stallSize": 12,
      "mccAmount": 0,
      "cardPaymentAmount": 43350,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 679,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 0,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "8986b0f7-6603-4f52-96f2-725ec2ff8312",
        "name": "nadeem saukat",
        "emailId": "stonecraft786@gmail.com",
        "phoneNo": "9525441162",
        "companyName": "Nadeem Marbles",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "plot 1c 18 block 5 street no 5 qasba colony manghoopir rod",
        "pinCode": 74600,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": null,
        "panNo": null,
        "passportNo": null,
        "aadhaarNo": null,
        "otpCode": null,
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": "karachi",
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "af01e040-4edf-41f2-bdee-ef97ed78188c",
          "industryType": "International-Lifestyle",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "1af1cae0-06b0-4dfc-9977-102759aeffe4",
          "type": "Private",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "9c6883b7-92a5-4c8f-bf64-8f8ba8863b21",
          "name": "Pakistan",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "50b3f484-ef6b-4bb1-8f61-bee9db3b594c",
          "userName": "chidrupshah",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [],
        "productsDTO": [
          {
            "id": "8b3c22ce-6d70-4888-9b3a-88c1be8f98ef",
            "productName": "Show Piece",
            "iimtfProductId": "",
            "hsnCode": "68159990",
            "exhibitorCount": 0,
            "maxPrice": 50000,
            "minPrice": 500,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "6fb42b18-6bc2-4143-97b0-65950c9a1db7",
              "name": "Statues & Showpiece",
              "description": "Statues & Showpiece",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "1244b450-ba97-448f-bded-4e87055b096b",
              "industryType": "Interior",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 61,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "bd169845-fc3f-45b7-8ef5-1a36506fbafb",
          "type": "Car Owners"
        },
        {
          "id": "f88211fc-d2c8-44f5-adda-5105e907db95",
          "type": "HNI"
        },
        {
          "id": "824a3be8-f956-43fc-a781-590b09cf4874",
          "type": "Club"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        },
        {
          "id": "5157c9c2-3dbc-41a5-a81d-ac833e32c6bf",
          "type": "Credit Card Holders"
        },
        {
          "id": "3f12cd4d-e6f5-40fc-8b73-d33a516991d9",
          "type": "Frequent Flyer"
        }
      ]
    },
    {
      "bookingId": "5f2c95b1-52a0-4634-8517-3d9dab674f92",
      "bookingDate": "23-01-2021",
      "bookingReferenceId": "PAN0042",
      "companyName": "DUBAI & PAK ITTAR PERFUME ( Hussain Perfume )",
      "stallCount": 1,
      "totalAmount": "60180",
      "receivedAmount": 0,
      "pendingAmount": 60180,
      "comment": null,
      "stallSize": 6,
      "mccAmount": 0,
      "cardPaymentAmount": 14200,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 340,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 0,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "34ab58a1-fbf7-41dc-8f99-a8772b33d842",
        "name": "MUZAHI KHAN",
        "emailId": "mujahidansari536@gmail.com",
        "phoneNo": "9650462516",
        "companyName": "DUBAI & PAK ITTAR PERFUME ( Hussain Perfume )",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "oudh al anfar al owais business tower 7th floor 705, deira dubai, uae",
        "pinCode": 0,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": "",
        "panNo": "",
        "passportNo": "",
        "aadhaarNo": "",
        "otpCode": "330008",
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": null,
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "af01e040-4edf-41f2-bdee-ef97ed78188c",
          "industryType": "International-Lifestyle",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "88cbb753-b085-4693-b9c7-d43837fea6ea",
          "type": "International-Government",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "50ed7dd6-b141-4603-8031-717e7e402fa4",
          "name": "Dubai",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "50b3f484-ef6b-4bb1-8f61-bee9db3b594c",
          "userName": "chidrupshah",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [],
        "productsDTO": [
          {
            "id": "4a7add1e-46b4-49f1-8cdf-294bebec83b9",
            "productName": "Attar",
            "iimtfProductId": "",
            "hsnCode": "33019031",
            "exhibitorCount": 0,
            "maxPrice": 1000,
            "minPrice": 500,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "8300c3c1-f50f-4d6b-a07a-1da7a22a2d17",
              "name": "Fragrance",
              "description": "Fragrance",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "1d999a7d-82c7-42fa-a018-642ff3712767",
              "industryType": "Cosmetics",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "eb513916-a7ee-45ce-bb5a-1da80c85cc89",
            "productName": "Perfume",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 1000,
            "minPrice": 500,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "8300c3c1-f50f-4d6b-a07a-1da7a22a2d17",
              "name": "Fragrance",
              "description": "Fragrance",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "1d999a7d-82c7-42fa-a018-642ff3712767",
              "industryType": "Cosmetics",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 71,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "bd169845-fc3f-45b7-8ef5-1a36506fbafb",
          "type": "Car Owners"
        },
        {
          "id": "f88211fc-d2c8-44f5-adda-5105e907db95",
          "type": "HNI"
        },
        {
          "id": "824a3be8-f956-43fc-a781-590b09cf4874",
          "type": "Club"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        },
        {
          "id": "5157c9c2-3dbc-41a5-a81d-ac833e32c6bf",
          "type": "Credit Card Holders"
        },
        {
          "id": "3f12cd4d-e6f5-40fc-8b73-d33a516991d9",
          "type": "Frequent Flyer"
        },
        {
          "id": "b1f987ab-e3e2-4a0a-8641-f9d2ebd6c7bf",
          "type": "Salons"
        }
      ]
    },
    {
      "bookingId": "1e430563-6ffd-4c90-b54d-be7e6d22753e",
      "bookingDate": "23-01-2021",
      "bookingReferenceId": "PAN0041",
      "companyName": "Silver Stark Co.",
      "stallCount": 4,
      "totalAmount": "361080",
      "receivedAmount": 0,
      "pendingAmount": 361080,
      "comment": null,
      "stallSize": 36,
      "mccAmount": 0,
      "cardPaymentAmount": 1700,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 1457,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 2000,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "dd732185-871e-47f0-babb-96cbadb8ef3b",
        "name": "Sayed Hamed",
        "emailId": "noemail@test.com",
        "phoneNo": "989302981144",
        "companyName": "Silver Stark Co.",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "Mashhad market bazarreza the first market floor up no2/1847",
        "pinCode": 0,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": "",
        "panNo": "",
        "passportNo": "",
        "aadhaarNo": "",
        "otpCode": "858681",
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": "Iran",
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "af01e040-4edf-41f2-bdee-ef97ed78188c",
          "industryType": "International-Lifestyle",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "63970e66-2db6-4668-8419-f8f26ba6df05",
          "type": "International-SME",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "5372f364-a2e6-43a9-bf7c-f36a3cd92292",
          "name": "Iran",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "50b3f484-ef6b-4bb1-8f61-bee9db3b594c",
          "userName": "chidrupshah",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [
          {
            "id": "c6f69408-d100-4878-8b03-a39d82706a18",
            "name": "Jewellery",
            "description": "Jewellery",
            "exhibitorIndustryTypeDTO": null
          }
        ],
        "productsDTO": [
          {
            "id": "41ec99d0-1446-4772-884c-d9c7bdbc1005",
            "productName": "Pillow Cover",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 10000,
            "minPrice": 700,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "4b33f52e-a393-4ec9-876a-e01a4dd2d723",
              "name": "Home Furnishing",
              "description": "Home Furnishing",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "bca41dca-6194-4ddc-b39c-df7a23e5d5a3",
              "industryType": "Home & Decor",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "3b75b120-6492-41fe-b2f6-f4ed97e3d4f3",
            "productName": "Bedsheet",
            "iimtfProductId": "",
            "hsnCode": "63041910",
            "exhibitorCount": 0,
            "maxPrice": 10000,
            "minPrice": 1000,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "4b33f52e-a393-4ec9-876a-e01a4dd2d723",
              "name": "Home Furnishing",
              "description": "Home Furnishing",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "bca41dca-6194-4ddc-b39c-df7a23e5d5a3",
              "industryType": "Home & Decor",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "f51ff618-5ba3-45e3-8aa3-eff5e773d9df",
            "productName": "Necklace",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 600,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "c6f69408-d100-4878-8b03-a39d82706a18",
              "name": "Jewellery",
              "description": "Jewellery",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "de4cc2d0-1161-4e8a-be31-b9c1361c09df",
              "industryType": "Lifestyle",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "35e324f0-f196-4396-baa6-dd464d4a78fe",
            "productName": "Honey",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 3000,
            "minPrice": 700,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "490667cf-383d-4f3a-92be-eabd0abb610b",
              "name": "Jam,Jelly,Honey",
              "description": "Jam,Jelly,Honey",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "2c81bccb-0ea7-4a8d-9039-084ea9b8dd07",
            "productName": "Watch",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 6000,
            "minPrice": 1500,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "b02cab4b-9dde-457c-ad5a-c22db07e3c38",
              "name": "Watch",
              "description": "Watch",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "de4cc2d0-1161-4e8a-be31-b9c1361c09df",
              "industryType": "Lifestyle",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "e6d21e7e-c363-46dd-ad5b-cf515ff40c1e",
            "productName": "Saffron",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 10000,
            "minPrice": 200,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "59f98de3-1b88-464e-9376-44af859accc0",
              "name": "Dry Fruits",
              "description": "Dry Fruits",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "439afc68-f1fa-42d6-9d0c-93dff5438e29",
            "productName": "Chocolate and toffie",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 4000,
            "minPrice": 200,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "91ffc101-04fa-4dc9-bddf-25b0315e0c9c",
              "name": "Snacks",
              "description": "Snacks",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "688b6d63-4ce4-4825-a90a-54b44f9c1528",
              "industryType": "Food",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 73,
          "stallSize": null
        },
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 74,
          "stallSize": null
        },
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 75,
          "stallSize": null
        },
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 72,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "bd169845-fc3f-45b7-8ef5-1a36506fbafb",
          "type": "Car Owners"
        },
        {
          "id": "f88211fc-d2c8-44f5-adda-5105e907db95",
          "type": "HNI"
        },
        {
          "id": "824a3be8-f956-43fc-a781-590b09cf4874",
          "type": "Club"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        },
        {
          "id": "5157c9c2-3dbc-41a5-a81d-ac833e32c6bf",
          "type": "Credit Card Holders"
        },
        {
          "id": "3f12cd4d-e6f5-40fc-8b73-d33a516991d9",
          "type": "Frequent Flyer"
        }
      ]
    },
    {
      "bookingId": "3c6345e5-abcd-4ade-aede-6ecf3f2255a6",
      "bookingDate": "22-01-2021",
      "bookingReferenceId": "PAN0019",
      "companyName": "Artisana",
      "stallCount": 1,
      "totalAmount": "90270",
      "receivedAmount": 0,
      "pendingAmount": 90270,
      "comment": null,
      "stallSize": 9,
      "mccAmount": 0,
      "cardPaymentAmount": 4550,
      "visitorSalesPersonName": "",
      "numberOfVisitorRequired": 510,
      "passesGiven": 0,
      "existingVisitorsForIndustry": 0,
      "googlePrice": 0,
      "productPrice": 900,
      "hangerDTO": {
        "hangerId": "ee930ea3-4385-4a49-a609-ccad3537cd33",
        "exhibitionId": "00000000-0000-0000-0000-000000000000",
        "hangerName": "1",
        "totalStalls": 0,
        "stallsBooked": 0,
        "remainingStalls": 0,
        "hight": 0,
        "width": 0
      },
      "exhibitorDTO": {
        "id": "fb11ffc4-df4e-4fa4-b6f0-4227df530a44",
        "name": "Fatima Tartoussi",
        "emailId": "fatima_tartoussy@hotmail.com",
        "phoneNo": "+96176710790",
        "companyName": "Artisana",
        "device": 0,
        "registrationType": null,
        "comment": null,
        "designation": null,
        "age": 0,
        "companyDescription": null,
        "address": "tripoli car exhibition street",
        "pinCode": 0,
        "password": null,
        "enquiryDate": null,
        "isAllocated": false,
        "exhibitorStatusId": "00000000-0000-0000-0000-000000000000",
        "bookingList": null,
        "gstNo": "",
        "panNo": "",
        "passportNo": "",
        "aadhaarNo": "",
        "otpCode": "231563",
        "isMobileNoVerified": false,
        "isEmailVerified": false,
        "averageProductPrice": 0,
        "companyWebsite": null,
        "city": "Lebanon",
        "allocationDate": null,
        "statusDate": null,
        "exhibitorIndustryType": {
          "id": "af01e040-4edf-41f2-bdee-ef97ed78188c",
          "industryType": "International-Lifestyle",
          "color": null,
          "productCount": 0,
          "count": 0
        },
        "exhibitorType": {
          "id": "eaa36d83-8198-42a4-ba44-17ab7931d6f9",
          "type": "Traders",
          "count": 0
        },
        "exhibitorStatusDTO": {
          "id": "00000000-0000-0000-0000-000000000000",
          "status": null
        },
        "country": {
          "id": "5eda72c2-5f74-41e7-9e32-4c6422d73f09",
          "name": "Lebanon",
          "color": null,
          "count": 0
        },
        "state": null,
        "exhibitorProspectType": null,
        "salesPersonDTO": {
          "id": "50b3f484-ef6b-4bb1-8f61-bee9db3b594c",
          "userName": "chidrupshah",
          "password": null,
          "roleId": "00000000-0000-0000-0000-000000000000",
          "roleName": null,
          "emailId": null,
          "phoneNumber": null,
          "color": null,
          "partnerId": "00000000-0000-0000-0000-000000000000",
          "salary": 0,
          "count": 0,
          "isDeleted": false
        },
        "enquiryStatusDTO": null,
        "enquiryCommentDTO": null,
        "exhibitorAddressList": [],
        "stalls": [],
        "categories": [
          {
            "id": "7a34e38e-36b8-4f24-b435-bd2702f9255b",
            "name": "Kitchen appliance",
            "description": "Kitchen appliance",
            "exhibitorIndustryTypeDTO": null
          }
        ],
        "productsDTO": [
          {
            "id": "74df9474-3a75-49e3-ae75-adc053bf1244",
            "productName": "Crockery",
            "iimtfProductId": "",
            "hsnCode": "6912",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 500,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "82841610-1386-494e-b5c3-3474ce583f7f",
              "name": "Kitchen toolset",
              "description": "Kitchen toolset",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "0ced1063-f446-43db-9849-065f4468be46",
              "industryType": "kitchen appliances",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "9724d229-b6e2-49c7-997e-c86350c37904",
            "productName": "Cuttlery",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 1500,
            "minPrice": 400,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "82841610-1386-494e-b5c3-3474ce583f7f",
              "name": "Kitchen toolset",
              "description": "Kitchen toolset",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "0ced1063-f446-43db-9849-065f4468be46",
              "industryType": "kitchen appliances",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "9f0b61d2-c21d-4f00-bd47-4f861553ad3c",
            "productName": "Earrings",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 300,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "c6f69408-d100-4878-8b03-a39d82706a18",
              "name": "Jewellery",
              "description": "Jewellery",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "de4cc2d0-1161-4e8a-be31-b9c1361c09df",
              "industryType": "Lifestyle",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "e7eee001-8413-415b-acb5-3a2e082ed138",
            "productName": "Bangles, Bracelet, armlets",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 5000,
            "minPrice": 450,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "c6f69408-d100-4878-8b03-a39d82706a18",
              "name": "Jewellery",
              "description": "Jewellery",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "de4cc2d0-1161-4e8a-be31-b9c1361c09df",
              "industryType": "Lifestyle",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "9724d229-b6e2-49c7-997e-c86350c37904",
            "productName": "Cuttlery",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 1400,
            "minPrice": 400,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "82841610-1386-494e-b5c3-3474ce583f7f",
              "name": "Kitchen toolset",
              "description": "Kitchen toolset",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "0ced1063-f446-43db-9849-065f4468be46",
              "industryType": "kitchen appliances",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "74df9474-3a75-49e3-ae75-adc053bf1244",
            "productName": "Crockery",
            "iimtfProductId": "",
            "hsnCode": "6912",
            "exhibitorCount": 0,
            "maxPrice": 3000,
            "minPrice": 600,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "82841610-1386-494e-b5c3-3474ce583f7f",
              "name": "Kitchen toolset",
              "description": "Kitchen toolset",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "0ced1063-f446-43db-9849-065f4468be46",
              "industryType": "kitchen appliances",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          },
          {
            "id": "f51ff618-5ba3-45e3-8aa3-eff5e773d9df",
            "productName": "Necklace",
            "iimtfProductId": "",
            "hsnCode": "",
            "exhibitorCount": 0,
            "maxPrice": 4000,
            "minPrice": 450,
            "ratingDTO": {
              "id": "00000000-0000-0000-0000-000000000000",
              "count": 0,
              "type": null,
              "value": "International Brand",
              "key": 3,
              "active": false
            },
            "categoryDTO": {
              "id": "c6f69408-d100-4878-8b03-a39d82706a18",
              "name": "Jewellery",
              "description": "Jewellery",
              "exhibitorIndustryTypeDTO": null
            },
            "exhibitorIndustryTypeDTO": {
              "id": "de4cc2d0-1161-4e8a-be31-b9c1361c09df",
              "industryType": "Lifestyle",
              "color": null,
              "productCount": 0,
              "count": 0
            },
            "institutionTypeDTOList": null
          }
        ]
      },
      "stallList": [
        {
          "stallId": "00000000-0000-0000-0000-000000000000",
          "price": 0,
          "stallNo": 24,
          "stallSize": null
        }
      ],
      "visitorInstituionTypeDTO": [
        {
          "id": "bd169845-fc3f-45b7-8ef5-1a36506fbafb",
          "type": "Car Owners"
        },
        {
          "id": "f88211fc-d2c8-44f5-adda-5105e907db95",
          "type": "HNI"
        },
        {
          "id": "824a3be8-f956-43fc-a781-590b09cf4874",
          "type": "Club"
        },
        {
          "id": "5ec4d961-f94a-46e6-9dc4-9343db154dec",
          "type": "Society"
        },
        {
          "id": "5157c9c2-3dbc-41a5-a81d-ac833e32c6bf",
          "type": "Credit Card Holders"
        },
        {
          "id": "3f12cd4d-e6f5-40fc-8b73-d33a516991d9",
          "type": "Frequent Flyer"
        },
        {
          "id": "b1f987ab-e3e2-4a0a-8641-f9d2ebd6c7bf",
          "type": "Salons"
        }
      ]
    }
  ]
}
