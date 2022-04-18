// ** Formulas used on Eligibility 2021 Bonus / 2022 Raise sheet **//
// ** https://docs.google.com/spreadsheets/d/1oB3qxU82jyLR-tz8lpLTnm8mKY-Cud4Xkwi8jZ-R20s/edit#gid=704809028 **//

const { addAbortSignal } = require("stream")

= QUERY({
  IMPORTRANGE("1lddyyJDHSAxm9Wx7L8W_JVpGAQebPnxBIk_JP4S387s", "Nitin Thukral!A6:L");
    IMPORTRANGE("1WE5DKyf7_84NM8wVzAZBvlbTwXiWKQtoGlr8KBRlIEA", "Jeff Garner!A6:L");
    IMPORTRANGE("1FuSgL8jf-o_wfCG6A5EWEPQYFLWUxi3w3NXIVrrS-1M", "Tom Reynolds!A6:L");
    IMPORTRANGE("19tBEXPDKjtaWX5UiiqmMF5_y1B_4DIlaTEEsVxDv-IY", "Phil Lewis!A6:L")
},
  "SELECT Col1,Col9,Col10,Col11 WHERE Col1 IS NOT NULL ORDER BY Col3 ASC", 1
)

  // ** Pulls data from individual leader tracking sheets into master file ** //

  // ** Bonus Type Column ** //
  = ARRAYFORMULA(IFS(ROW($Q5:$Q) = 5, "Bonus Type", $B5: $B = "", "", TRUE, VLOOKUP($B5: $B, {
    IMPORTRANGE("1lddyyJDHSAxm9Wx7L8W_JVpGAQebPnxBIk_JP4S387s", "Nitin Thukral!A6:J");
  IMPORTRANGE("1WE5DKyf7_84NM8wVzAZBvlbTwXiWKQtoGlr8KBRlIEA", "Jeff Garner!A6:J");
  IMPORTRANGE("1FuSgL8jf-o_wfCG6A5EWEPQYFLWUxi3w3NXIVrrS-1M", "Tom Reynolds!A6:J");
  IMPORTRANGE("19tBEXPDKjtaWX5UiiqmMF5_y1B_4DIlaTEEsVxDv-IY", "Phil Lewis!A6:J")
  }, 9, FALSE)))

  // ** Raise Type Column ** //
  = ARRAYFORMULA(IFS(ROW($R5:$R) = 5, "Raise Type", $B5: $B = "", "", TRUE, VLOOKUP($B5: $B, {
    IMPORTRANGE("1lddyyJDHSAxm9Wx7L8W_JVpGAQebPnxBIk_JP4S387s", "Nitin Thukral!A6:J");IMPORTRANGE("1WE5DKyf7_84NM8wVzAZBvlbTwXiWKQtoGlr8KBRlIEA", "Jeff Garner!A6:J");IMPORTRANGE("1FuSgL8jf-o_wfCG6A5EWEPQYFLWUxi3w3NXIVrrS-1M", "Tom Reynolds!A6:J");IMPORTRANGE("19tBEXPDKjtaWX5UiiqmMF5_y1B_4DIlaTEEsVxDv-IY", "Phil Lewis!A6:J")
  }, 10, FALSE)))

  // ** Notes Column ** //
  = ARRAYFORMULA(IFS(ROW($S5:$S) = 5, "Notes", $B5: $B = "", "", TRUE, VLOOKUP($B5: $B, {
      IMPORTRANGE("1lddyyJDHSAxm9Wx7L8W_JVpGAQebPnxBIk_JP4S387s", "Nitin Thukral!A6:K");
        IMPORTRANGE("1WE5DKyf7_84NM8wVzAZBvlbTwXiWKQtoGlr8KBRlIEA", "Jeff Garner!A6:K");
          IMPORTRANGE("1FuSgL8jf-o_wfCG6A5EWEPQYFLWUxi3w3NXIVrrS-1M", "Tom Reynolds!A6:K");
            IMPORTRANGE("19tBEXPDKjtaWX5UiiqmMF5_y1B_4DIlaTEEsVxDv-IY", "Phil Lewis!A6:K") },11,FALSE)))


  // ** Build of individual Tracking Sheets - Jeff Garner "https://docs.google.com/spreadsheets/d/1WE5DKyf7_84NM8wVzAZBvlbTwXiWKQtoGlr8KBRlIEA/edit#gid=1552664535" **//
  =QUERY(IMPORTRANGE("1oB3qxU82jyLR-tz8lpLTnm8mKY-Cud4Xkwi8jZ-R20s", "Master!A5:S"), "select Col2,Col3,Col5,Col9,Col4,Col6,Col7 where Col2 is not null and Col10 contains 'Jeff Garner' order by Col3 asc label Col2 'Emp Person ID', Col9 'Start Date' format Col9 'mm/dd/yy'", 1)

  // ** Build of individual Tracking Sheets - Jeff Garner "https://docs.google.com/spreadsheets/d/1WE5DKyf7_84NM8wVzAZBvlbTwXiWKQtoGlr8KBRlIEA/edit#gid=1552664535" **//
  =QUERY(IMPORTRANGE("1oB3qxU82jyLR-tz8lpLTnm8mKY-Cud4Xkwi8jZ-R20s", "Master!A5:S"),
    "select Col2,Col3,Col5,Col9,Col4,Col6,Col7 where Col2 is not null and Col10 contains 'Nitin Thukral' order by Col3 asc label Col2 'Emp Person ID', Col9 'Start Date' format Col9 'mm/dd/yy'", 1)

  =QUERY(IMPORTRANGE("1oB3qxU82jyLR-tz8lpLTnm8mKY-Cud4Xkwi8jZ-R20s", "Master!A5:S"), "select Col2,Col3,Col5,Col9,Col4,Col6,Col7 where Col2 is not null and Col10 contains 'Tom Reynolds' order by Col3 asc label Col2 'Emp Person ID', Col9 'Start Date' format Col9 'mm/dd/yy'", 1)

  =QUERY(IMPORTRANGE("1oB3qxU82jyLR-tz8lpLTnm8mKY-Cud4Xkwi8jZ-R20s", "Master!A5:S"), "select Col2,Col3,Col5,Col9,Col4,Col6,Col7 where Col2 is not null and Col10 contains 'Phil Lewis' order by Col3 asc label Col2 'Emp Person ID', Col9 'Start Date' format Col9 'mm/dd/yy'", 1)


  = ARRAYFORMULA(IFS(ROW($S5: $S) = 5, "Mgr Notes", $B5: $B = "", "", TRUE, IF(ISBLANK($S5: $S) = TRUE, $T5: $T, IF(ISBLANK($T5: $T) = TRUE, $S5: $S, $S5: $S & " | " & $T5: $T))))


  =QUERY({
      IMPORTRANGE("1WE5DKyf7_84NM8wVzAZBvlbTwXiWKQtoGlr8KBRlIEA", "Aquent Funded Raises & Bonuses!A4:S");
      IMPORTRANGE("1FuSgL8jf-o_wfCG6A5EWEPQYFLWUxi3w3NXIVrrS-1M", "Aquent Funded Raises & Bonuses!A4:S")
    },
    "SELECT Col1, Col2, Col8, Col9, Col10, Col11, Col14, Col15, Col16, Col17, Col18, Col19 where Col1 is not null order by Col2 Label Col8 '2021 Bonus Amount', Col9 'Process Date', Col11 'CKB Approved', Col14 '2022 Rate', Col15 'Bill Rate Increase', Col16 'Effective Date', Col18 'CKB Approved'", 1)

    =QUERY(
      IMPORTRANGE("1oB3qxU82jyLR-tz8lpLTnm8mKY-Cud4Xkwi8jZ-R20s","MASTER!A5:S"),
      "select Col2, Col3, Col4, Col11, Col5, Col13 where Col12='Jeff Garner' and Col15 contains 'Aquent Funded' or Col16 contains 'Aquent Funded' and Col12='Jeff Garner' order by Col5 asc, Col3 asc label Col2 'Emp Person ID', Col11 'Start Date', Col13 'Manager' format Col11 'mm/dd/yy'",1)

= QUERY(
  IMPORTRANGE(
    "1WE5DKyf7_84NM8wVzAZBvlbTwXiWKQtoGlr8KBRlIEA", "2021 Client Funded Bonus Worksheet!$A4:$M"),
"Select Col1 where Col1 is not null",1)
addAbortSignal