import React from "react";
import Tooltip from "../Tooltip";

export const tblConfig = {
  disable: false,
  showHeader: true,
  row: [
    {
      headerTitle: "ردیف",
      displayTitle: "rowIndex",
      size: 2,
      responsiveBreakPoint: 768,
      responsiveShow: true,
    },
    {
      headerTitle: "نام لاتین استان",
      displayTitle: "englishTitle",
      size: 2,
      responsiveBreakPoint: 768,
      responsiveShow: true,
    },
    {
      headerTitle: "کد",
      displayTitle: "code",
      size: 2,
      responsiveBreakPoint: 768,
      responsiveShow: true,
    },

    {
      headerTitle: "کد شهر",
      displayTitle: "code",
      size: 2,
      responsiveBreakPoint: 1200,
      responsiveShow: false,
    },
  ],
};
