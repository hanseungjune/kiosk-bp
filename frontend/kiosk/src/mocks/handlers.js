import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://bp.ssaverytime.kr:8080/api/kiosk/home/kiosk-list",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          { id: 1, name: "구미 메가박스점" },
          { id: 2, name: "구미 구미역점" },
          { id: 3, name: "구미 순천향대학교병원" },
        ])
      );
    }
  ),
  rest.get(
    "https://bp.ssaverytime.kr:8080/api/kiosk/home/brolly/:id",
    (req, res, ctx) => {
      const { id } = req.params;
      let response;

      if (id === "1") {
        response = { brollyCnt: 10, emptyCnt: 5 };
      } else if (id === "2") {
        response = { brollyCnt: 20, emptyCnt: 15 };
      } else if (id === "3") {
        response = { brollyCnt: 30, emptyCnt: 25 };
      } else {
        response = { brollyCnt: 0, emptyCnt: 0 };
      }

      return res(ctx.status(200), ctx.json(response));
    }
  ),
  rest.post(
    "https://bp.ssaverytime.kr:8080/api/brolly/return",
    (req, res, ctx) => {
      const { brollyName, caseId, imgData } = req.body;

      return res(
        ctx.status(200),
        ctx.json({
          success: true,
        })
      );
    }
  ),
  rest.get(
    "https://bp.ssaverytime.kr:8080/api/kiosk/home/kiosk-name",
    (req, res, ctx) => {
      const { id } = req.params;
      console.log(id);
      let kioskName;
      switch (id) {
        case "1":
          kioskName = "Kiosk 1";
          break;
        case "2":
          kioskName = "Kiosk 2";
          break;
        case "3":
          kioskName = "Kiosk 3";
          break;
        default:
          kioskName = "Unknown Kiosk";
          break;
      }

      return res(
        ctx.status(200),
        ctx.json({
          kioskName: kioskName,
          refundMoney: 50000,
          depositeMoney: 100000,
          period: 1,
          price: 5000,
          refundMoney: 95000,
        })
      );
    }
  ),
];
