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
];
