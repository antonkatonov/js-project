const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%'
    },
    exp: '1 month'
  },
  showAgeAndLangs: function (obj) {
    const {
      age
    } = obj;
    const {
      languages
    } = obj.skills;
    let about = `Мне ${age} и я владею `;

    languages.forEach(function (item) {
      about += `${item.toUpperCase()} `;
    });

    console.log(about);

    return about;
  }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);



function showExperience(obj) {
  const {
    exp
  } = obj.skills;
  console.log(exp);
  return exp;
}

showExperience(personalPlanPeter);


function showProgrammingLangs(obj) {
  let str = '';
  const {
    programmingLangs
  } = obj.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
  }
  console.log(str);

  return str;
}

showProgrammingLangs(personalPlanPeter);