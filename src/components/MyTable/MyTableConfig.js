import StatementHandler from "../../Util/StatementHandler";

export const MyTableConfig = () => {
  return {
    disable: false,
    showHeader: true,
    row: [
      {
        headerTitle: "row",
        displayTitle: "rowIndex",
        size: 1,
      },
      {
        headerTitle: "UserId",
        displayTitle: "userId",
        size: 1,
        responsiveBreakPoint: 768,
        responsiveShow: false,
      },
      {
        headerTitle: "Title",
        displayTitle: "title",
        size: 3,
        responsiveBreakPoint: 768,
        responsiveShow: true,
        element: (props) => {
          return <div>{StatementHandler(props.row.title, 20)}</div>;
        },
      },
      {
        headerTitle: "Body",
        displayTitle: "body",
        size: 6,
        responsiveBreakPoint: 768,
        responsiveShow: true,
        element: (props) => {
          return <div>{StatementHandler(props.row.body, 70)}</div>;
        },
      },
    ],
  };
};
