var standardParams = [
  "ParamAngleX",
  "ParamAngleY",
  "ParamAngleZ",
  "ParamEyeLOpen",
  "ParamEyeLSmile",
  "ParamEyeROpen",
  "ParamEyeRSmile",
  "ParamEyeBallX",
  "ParamEyeBallY",
  "ParamEyeBallForm",
  "ParamBrowLY",
  "ParamBrowRY",
  "ParamBrowLX",
  "ParamBrowRX",
  "ParamBrowLAngle",
  "ParamBrowRAngle",
  "ParamBrowLForm",
  "ParamBrowRForm",
  "ParamMouthForm",
  "ParamMouthOpenY",
  "ParamCheek",
  "ParamBodyAngleX",
  "ParamBodyAngleY",
  "ParamBodyAngleZ",
  "ParamBreath",
  "ParamArmLA",
  "ParamArmRA",
  "ParamArmLB",
  "ParamArmRB",
  "ParamHandL",
  "ParamHandR",
  "ParamHairFront",
  "ParamHairSide",
  "ParamHairBack",
  "ParamHairFluffy",
  "ParamShoulderY",
  "ParamBustX",
  "ParamBustY",
  "ParamBaseX",
  "ParamBaseY"
];

document.querySelector('.Sliders').addEventListener('change', e => {
  let val = parseFloat(e.target.value);
  let id = e.target.id;
  runModel(view => {
    //先傳到lapp delegate的view的參數
    //綁定參數
    if (id === 'ParamAngleX') view.angleX = val;
    if (id === 'ParamAngleY') view.angleY = val;
    if (id === 'ParamAngleZ') view.angleZ = val;
    if (id === 'ParamEyeLOpen') view.eyeLOpen = val;
    if (id === 'ParamEyeLSmile') view.eyeLSmile = val;
    if (id === 'ParamEyeROpen') view.eyeROpen = val;
    if (id === 'ParamEyeRSmile') view.eyeRSmile = val;
    if (id === 'ParamEyeBallX') view.eyeBallX = val;
    if (id === 'ParamEyeBallY') view.eyeBallY = val;
    view.eyeBallForm = 0;
    if (id === 'ParamBrowLY') view.browLY = val;
    if (id === 'ParamBrowRY') view.browRY = val;
    if (id === 'ParamBrowLX') view.browLX = val;
    if (id === 'ParamBrowRX') view.browRX = val;
    if (id === 'ParamBrowLAngle') view.browLAngle = val;
    if (id === 'ParamBrowRAngle') view.browRAngle = val;
    if (id === 'ParamBrowLForm') view.browLForm = val;
    if (id === 'ParamBrowRForm') view.browRForm = val;
    //mouth form
    if (id === 'ParamMouthForm') view.mouthForm = val;
    //mouth openY
    if (id === 'ParamMouthOpenY') view.mouthOpenY = val;
    if (id === 'ParamCheek') view.cheek = val;
    if (id === 'ParamBodyAngleX') view.bodyAngleX = val;
    if (id === 'ParamBodyAngleY') view.bodyAngleY = val;
    if (id === 'ParamBodyAngleZ') view.bodyAngleZ = val;
    if (id === 'ParamBreath') view.breath = val;
    view.armLA = 0;
    view.armRA = 0;
    view.armLB = 0;
    view.armRB = 0;
    view.handL = 0;
    view.handR = 0;
    if (id === 'ParamHairFront') view.hairFront = val;
    view.hairSide = 0;
    if (id === 'ParamHairBack') view.hairBack = val;
    view.hairFluffy = 0;
    view.shoulderY = 0;
    view.bustX = 0;
    view.bustY = 0;
    view.baseX = 0;
    view.baseY = 0;
  });
});

let jsonFile = document.querySelector('#jsonFile');
var paramsId = [];
var standardOptionList = document.getElementById("standardOptionList");
var specialOptionList = document.getElementById("specialOptionList");

jsonFile.addEventListener("change", (e) => {
  let files = e.target.files;

  const reader = new FileReader();
  reader.readAsText(files[0]);
  reader.onload = function () {
    let jsonText = JSON.parse(this.result);

    jsonText["Parameters"].forEach( function(item, i) {
      let newOption = document.createElement('option');
      newOption.value = item['Id'];
      newOption.innerText = item['Id'];

      if(standardParams.includes(item['Id'])) {
        standardOptionList.appendChild(newOption);
      } else {
        specialOptionList.appendChild(newOption);
      }
    });
  }
})

// 標準參數
var nowStandardId;

standardOptionList.addEventListener("change", (e) => {
  document.getElementById("ParamStandardName").innerText = e.target.value;
  nowStandardId = e.target.value;
})

var standardMax = document.getElementById("ParamStandardMax");
var standardMin = document.getElementById("ParamStandardMin");
var standardSlider = document.getElementById("ParamStandardSlider");

standardSlider.addEventListener("change", (e) => {
  let rawVal = parseFloat(e.target.value);
  let id = nowStandardId;

  let range = standardMax.value - standardMin.value;
  let val = rawVal * range / 100 + Number(standardMin.value);

  console.log(val);

  runModel(view => {
    if (id === 'ParamAngleX') view.angleX = val;
    if (id === 'ParamAngleY') view.angleY = val;
    if (id === 'ParamAngleZ') view.angleZ = val;
    if (id === 'ParamEyeLOpen') view.eyeLOpen = val;
    if (id === 'ParamEyeLSmile') view.eyeLSmile = val;
    if (id === 'ParamEyeROpen') view.eyeROpen = val;
    if (id === 'ParamEyeRSmile') view.eyeRSmile = val;
    if (id === 'ParamEyeBallX') view.eyeBallX = val;
    if (id === 'ParamEyeBallY') view.eyeBallY = val;
    if (id === 'ParamEyeBallForm') view.eyeBallForm = val;
    if (id === 'ParamBrowLY') view.browLY = val;
    if (id === 'ParamBrowRY') view.browRY = val;
    if (id === 'ParamBrowLX') view.browLX = val;
    if (id === 'ParamBrowRX') view.browRX = val;
    if (id === 'ParamBrowLAngle') view.browLAngle = val;
    if (id === 'ParamBrowRAngle') view.browRAngle = val;
    if (id === 'ParamBrowLForm') view.browLForm = val;
    if (id === 'ParamBrowRForm') view.browRForm = val;
    if (id === 'ParamMouthForm') view.mouthForm = val;
    if (id === 'ParamMouthOpenY') view.mouthOpenY = val;
    if (id === 'ParamCheek') view.cheek = val;
    if (id === 'ParamBodyAngleX') view.bodyAngleX = val;
    if (id === 'ParamBodyAngleY') view.bodyAngleY = val;
    if (id === 'ParamBodyAngleZ') view.bodyAngleZ = val;
    if (id === 'ParamBreath') view.breath = val;
    if (id === 'ParamArmLA') view.armLA = val;
    if (id === 'ParamArmRA') view.armRA = val;
    if (id === 'ParamArmLB') view.armLB = val;
    if (id === 'ParamArmRB') view.armRB = val;
    if (id === 'ParamHandL') view.handL = val;
    if (id === 'ParamHandR') view.handR = val;
    if (id === 'ParamHairFront') view.hairFront = val;
    if (id === 'ParamHairSide') view.hairSide = val;
    if (id === 'ParamHairBack') view.hairBack = val;
    if (id === 'ParamHairFluffy') view.hairFluffy = val;
    if (id === 'ParamShoulderY') view.shoulderY = val;
    if (id === 'ParamBustX') view.bustX = val;
    if (id === 'ParamBustY') view.bustY = val;
    if (id === 'ParamBaseX') view.baseX = val;
    if (id === 'ParamBaseY') view.baseY = val;
  });
})

// 特定參數
var nowSpecailId;

specialOptionList.addEventListener("change", (e) => {
  document.getElementById("ParamSpecialName").innerText = e.target.value;
  nowSpecailId = e.target.value;
})

var specialMax = document.getElementById("ParamSpecialMax");
var specialMin = document.getElementById("ParamSpecialMin");
var specialSlider = document.getElementById("ParamSpecialSlider");

specialSlider.addEventListener("change", (e) => {
  let rawVal = parseFloat(e.target.value);
  let id = nowSpecailId;

  let range = specialMax.value - specialMin.value;
  let val = rawVal * range / 100 + Number(specialMin.value);

  console.log(val);

  runModel(view => {
    //先傳到lapp delegate的view的參數
    //綁定參數
    if (id === 'ParamTere') view.tere = val;
    if (id === 'ParamFaceForm') view.faceForm = val;
    if (id === 'ParamEyeForm') view.eyeForm = val;
    if (id === 'ParamTear') view.tear = val;
    if (id === 'ParamScarf') view.scarf = val;
    if (id === 'ParamBodyUpper') view.bodyUpper = val;
    if (id === 'ParamHandChangeR') view.handChangeR = val;
    if (id === 'ParamHandAngleR') view.handAngleR = val;
    if (id === 'ParamHandDhangeL') view.handDhangeL = val;
    if (id === 'ParamHandAngleL') view.handDhangeL = val;
  });
})
