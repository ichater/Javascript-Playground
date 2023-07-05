const smaData = require("./sma");
const MFs = require("./MFs");
const sharesRaw = require("./sharesRaw");
var fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const ManagedFundSMA = require("./ManagedFundAndSMA");

// const ManagedFundSMACat = ManagedFundSMA.map((inv) => inv.apir);
// const ManagedFundSMACatSet = new Set(ManagedFundSMACat);

// function areThereDuplicates(arr) {
//   let lookup = {};
//   for (let i = 0; i < arr.length; i++) {
//     let key = arr[i];
//     lookup[key] = lookup[key] === 1 ? (lookup[key] += 1) : 1;
//   }
//   const filteredObj = () => {
//     const newObj = {};
//     for ([key, value] of Object.entries(lookup)) {
//       if (value > 1) {
//         newObj[key] = value;
//       }
//     }
//     return newObj;
//   };

//   return filteredObj();
// }

// console.log(areThereDuplicates(ManagedFundSMACat));

const smaDataTranspiled = smaData.map((sma) => ({
  id: uuidv4(),
  name: sma.Name,
  apir: sma.APIR,
  nabOwned: !!sma.Nab,
  mer: sma.MER,
  category: "Seperately Managed Account",
}));

const MFdataTranspiled = MFs.map((fund) => ({
  id: uuidv4(),
  name: fund.FundName,
  apir: fund.APIR,
  nabOwned: !!fund.NabOwned,
  mer: fund.MER,
  category: "Managed Fund",
}));

// const data = JSON.stringify([...MFdataTranspiled, ...smaDataTranspiled]);
const data = JSON.stringify(
  sharesRaw.map((data) => ({
    id: uuidv4(),
    asxCode: data["ASX code"].toString(),
    name: data["Listed investment name"],
    category: data.Category,
  }))
);
console.log(data);

const newFile = (fileName, data) =>
  fs.writeFile(
    `./src/InvestmentConversion/${fileName}.js`,
    data,
    "utf8",
    (err) => {
      if (err) throw err;
      console.log("File is created successfully.");
    }
  );

newFile("ConvertedInvestments/TranspiledShares", data);
