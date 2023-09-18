import { AppContext } from '$fresh/server.ts';

export default async function App(_: Request, context: AppContext) {
  return (
    <html lang="de">
      <body>
        <div>
          <context.Component />
        </div>
      </body>
    </html>
  );
}
