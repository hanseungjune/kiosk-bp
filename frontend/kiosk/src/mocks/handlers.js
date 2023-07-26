import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://bp.ssaverytime.kr:8080/api/kiosk/home/kiosk-list",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          { id: 1, name: "Location 1" },
          { id: 2, name: "Location 2" },
          { id: 3, name: "Location 3" },
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
];
