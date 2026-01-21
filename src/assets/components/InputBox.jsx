import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
}) {
  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-4 
                    shadow-lg border border-white/30">
      <p className="text-xs font-semibold text-gray-700 mb-2">
        {label}
      </p>

      <div className="flex items-center gap-3">
        <input
          type="number"
          value={amount}
          disabled={amountDisable}
          placeholder="0.00"
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className={`w-full bg-transparent outline-none text-2xl font-bold 
            ${
              amountDisable
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-900 focus:text-blue-700"
            }`}
        />

        <select
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          className="bg-white/70 px-4 py-2 rounded-xl font-semibold 
                     text-sm cursor-pointer shadow hover:bg-white transition"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
