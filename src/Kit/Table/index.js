import React from "react";
import styled from "styled-components";
import { Col } from "../Column";
import { Row } from "../Row";
import PropTypes from "prop-types";
import Pagination from "./Pagination";
import { string } from "yup";
import { withTheme } from "styled-components";

const TableWrapper = styled(Col)`
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  border-radius: 0.45rem;
  font-family: ${(props) => props.theme.fontDefault};
  width: 100%;
  min-height: ${(props) => props.height};
  height: ${(props) => props.height};
  max-height: ${(props) => `calc(${props.height})`};
  position: relative;
  /* border : 0.0625rem solid red; */
  z-index: 0;
`;
export const TableOverlay = styled(Col)`
  display: ${(props) => (props.disable !== true ? "none" : "flex")};
  background-color: white;
  opacity: 0.6;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;
const HeaderWrapper = styled(Row)`
  height: 4.375rem;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
`;
const BodyWrapper = styled(Col)`
  margin-top: ${(props) => (props.showHeader === true ? "4.375rem" : "0")};
  height: ${(props) =>
    `calc(100% - ${
      props.showPaging === true
        ? props.showHeader === true
          ? "6.875rem"
          : "4.375rem"
        : props.showHeader === true
        ? "4.375rem"
        : "0"
    })`};
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 1.25rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c1cae1;
    border-radius: 0.625rem;
  }
  /* ::-webkit-scrollbar {
    display: none;
  } */
`;
const TblRow = styled(Row)`
  justify-content: center;
  height: 5rem;
  min-height: 5rem;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 0.9375rem;
  border-radius: 0.875rem;
  background-color: white;
  cursor: pointer;
  :hover {
    background-color: #ebebeb;
  }
`;

const NoRecordMsgContainer = styled(Col)`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0.625rem 0;
  border-radius: 0.875rem;
`;

const NoRecordMsgIcon = styled(Row)`
  margin-bottom: 2.8125rem;
`;

const NoRecordMsgText = styled(Row)`
  font-weight: 600;
  font-size: 1.25rem;
`;

const TblHeaderCol = styled(Row)`
  height: 100%;
  align-items: center;
  flex: ${(props) => props.flex};
  justify-content: center;
  -webkit-flex: ${(props) => props.flex};
  font-family: ${(props) => props.theme.fontDefault};
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.67;
  letter-spacing: normal;
  text-align: left;
  color: #9ea1a8;
  padding: ${(props) =>
    props.isLastCol === true
      ? "0 0.625rem 0 0"
      : props.isFirstCol === true
      ? "0 0 0 0.625rem"
      : "0"};
  all {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }
  span {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }
  ${(props) => {
    if (props.responsiveBreakPoint) {
      return `
    @media screen and (max-width: ${props.responsiveBreakPoint}px) {
    display: ${props.responsiveShow === false && `none`};
    font-size : 0.625rem;
    }
    `;
    } else {
      return `
    @media screen and (max-width: 768px) {
    display: ${props.responsiveShow === false && `none`};
    font-size : 0.625rem;
    }
    `;
    }
  }}
`;
const TblCol = styled(Row)`
  height: 100%;
  align-items: center;
  justify-content: center;
  flex: ${(props) => props.flex};
  -webkit-flex: ${(props) => props.flex};
  font-family: ${(props) => props.theme.fontDefault};
  font-size: 0.9375rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.83;
  letter-spacing: normal;
  text-align: left;
  color: #444b54;
  padding: ${(props) =>
    props.isFirstCol === true
      ? "0 0.625rem 0 0"
      : props.isLastCol === true
      ? "0 0 0 0.625rem"
      : "0"};
  all {
    display: flex;
    display: -webkit-flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  span {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  ${(props) => {
    if (props.responsiveBreakPoint) {
      return `
    @media screen and (max-width: ${props.responsiveBreakPoint}px) {
    display: ${props.responsiveShow === false && `none`};
    }
    `;
    } else {
      return `
    @media screen and (max-width: 768px) {
    display: ${props.responsiveShow === false && `none`};
    }
    `;
    }
  }}
`;

const LoaderContainer = styled(Col)`
  height: 100%;
`;

const Table = (props) => {
  const {
    tblConfig,
    tblData,
    pageHandler,
    skip,
    count,
    take,
    noRecordMsg,
    height,
    showPaging,
    loading,
    loader,
    onClickRow,
  } = props;
  const LoaderComponent = loader;
  return (
    <TableWrapper height={height} className="bict__tblWrapper">
      <TableOverlay disable={tblConfig.disable} />
      <HeaderWrapper
        style={{
          display: tblConfig && tblConfig.showHeader === false && "none",
        }}
        className="bict__tblHeaderContainer"
      >
        {tblConfig && tblConfig.showHeader === true ? (
          tblConfig.row.map((each, i) => {
            return (
              <TblHeaderCol
                className="bict__tblHeaderItem"
                responsiveShow={each.responsiveShow}
                responsiveBreakPoint={each.responsiveBreakPoint}
                flex={each.size}
                isFirstCol={i === 0}
                isLastCol={i === tblConfig.row.length - 1}
              >
                {each.headerTitle}
              </TblHeaderCol>
            );
          })
        ) : (
          <TblHeaderCol className="bict__tblHeaderItem"></TblHeaderCol>
        )}
      </HeaderWrapper>
      <BodyWrapper
        height={height}
        showPaging={showPaging}
        showHeader={tblConfig.showHeader}
        className="bict__tblBodyWrapper"
      >
        {loading === true ? (
          <LoaderContainer>
            {loader ? <LoaderComponent /> : "لطفا چند لحظه منتظر بمانید ..."}
          </LoaderContainer>
        ) : tblData && tblData.length > 0 ? (
          tblData.map((each, i) => {
            return (
              <TblRow
                key={i}
                className={`bict__tblRow ${
                  (i + 1) % 2 == 0 ? `bict__tblRow__even` : `bict__tblRow__odd`
                }`}
                index={i}
                onClick={() => onClickRow(each)}
              >
                {tblConfig.row.map((Row, colIndex) => {
                  let Element = (props) => (
                    <Row.element
                      index={i}
                      row={each}
                      rowIndex={skip - take + i + 1}
                      DataLength={tblData.length}
                    >
                      {props.children}
                    </Row.element>
                  );

                  return (
                    <TblCol
                      key={i + colIndex}
                      isFirstCol={colIndex === 0}
                      isLastCol={colIndex === tblConfig.row.length - 1}
                      className={`bict__tblCol`}
                      responsiveShow={Row.responsiveShow}
                      responsiveBreakPoint={Row.responsiveBreakPoint}
                      flex={Row.size}
                    >
                      {Row.element ? (
                        <Element>
                          {Row.displayTitle === "rowIndex"
                            ? skip - take + i + 1
                            : each[Row.displayTitle]}
                        </Element>
                      ) : (
                        <span>
                          {Row.displayTitle === "rowIndex"
                            ? skip - take + i + 1
                            : each[Row.displayTitle]}
                        </span>
                      )}
                    </TblCol>
                  );
                })}
              </TblRow>
            );
          })
        ) : (
          <TblRow className="bict__tblRow bict__noItem">
            {noRecordMsg || "موردی وجود ندارد"}
          </TblRow>
        )}
      </BodyWrapper>
      {showPaging !== false && (
        <Pagination
          pageHandler={pageHandler}
          skip={skip}
          pageSize={take}
          count={count}
          showPaging={showPaging}
        />
      )}
    </TableWrapper>
  );
};
Table.defaultProps = {
  tblConfig: null,
  tblData: [],
  count: 0,
  noRecordMsg: "موردی وجود ندارد",
  pageSize: 20,
  height: "100%",
  showPaging: true,
};
Table.propTypes = {
  /**
   * حالت لودینگ
   */
  loading: false,
  /**
   * کامپوننت لودینگ
   */
  loader: null,
  /**
   * اطلاعات جدول
   */
  tblData: PropTypes.arrayOf(Object).isRequired,
  /**
   * کانفیگ جدول
   */
  tblConfig: PropTypes.shape({
    showHeader: true,
    disable: false,
    row: PropTypes.arrayOf(
      PropTypes.shape({
        headerTitle: PropTypes.string,
        displayTitle: PropTypes.string,
        size: PropTypes.number,
        responsiveShow: PropTypes.bool,
        element: PropTypes.oneOfType([string, Function]),
      })
    ),
  }),
  /**
   * متد برای جا به جایی بین صفحات
   */
  pageHandler: PropTypes.func,
  /**
   * تعداد رکورد های پشت سر گذاشته شده
   */
  skip: PropTypes.number,
  /**
   * تعداد رکور های جدول
   */
  count: PropTypes.number,
  /**
   * پیغام برای نمایش در زمانی که رکوردی وجود ندارد
   */
  noRecordMsg: PropTypes.string,
  /**
   * تعداد رکورد های هر صفحه
   */
  take: PropTypes.number,
};
export default withTheme(Table);
