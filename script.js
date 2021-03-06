const bp = document.querySelector(".buyPrice");
const sp = document.querySelector(".sellingPrice");
const qty = document.querySelector(".qty");
const btnCal = document.querySelector(".calculate");
const output = document.querySelector(".output");
const btnClear = document.querySelector(".clear");

const start = () => {
  sp.value = "";
  bp.value = "";
  qty.value = "";
  output.innerText = "";
  output.classList.add("border");
  output.classList.remove("activeProfit");
  output.classList.remove("activeLoss");
  output.classList.remove("borderProfit");
  output.classList.remove("borderLoss");
};

const calProfitOrLoss = () => {
  const sellPrice = sp.value;
  const buyPrice = bp.value;
  const stockQty = qty.value;
  const buyValue = buyPrice * stockQty;
  const sellValue = sellPrice * stockQty;

  if (buyValue > 0 && sellValue >= 0) {
    if (buyValue > sellValue) {
      output.classList.remove("activeProfit");
      output.classList.remove("borderProfit");
      output.classList.remove("border");
      output.classList.add("borderLoss");
      output.classList.add("activeLoss");
      const lossPercent = `${((buyValue - sellValue) * 100) / buyValue}`;
      output.innerText = `Your loss is Rs.${
        buyValue - sellValue
      }, you lost ${lossPercent.slice(0, 5)}% in this trade.`;
    } else {
      output.classList.remove("activeLoss");
      output.classList.remove("borderLoss");
      output.classList.remove("border");
      output.classList.add("borderProfit");
      output.classList.add("activeProfit");
      const profitPercent = `${((sellValue - buyValue) * 100) / buyValue}`;
      output.innerText = `Your Profit is Rs.${
        sellValue - buyValue
      }, you gain ${profitPercent.slice(0, 5)}% in this trade.`;
    }
  } else {
    output.innerText = "Enter valid stock prices !";
  }
};

btnCal.addEventListener("click", calProfitOrLoss);

btnClear.addEventListener("click", start);
start();
