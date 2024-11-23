export default function Timeline({ isPoster }: { isPoster?: boolean }) {
  return (
    <>
      {/* Desktop Layout */}
      <div className="mx-auto hidden w-full md:block">
        <div className="relative">
          <div className="absolute mb-8 h-8 w-full">
            <svg
              width="100%"
              height={32}
              viewBox="0 0 800 32"
              preserveAspectRatio="none"
            >
              {/* Main horizontal line */}
              {/* Arrow */}
              <path
                id="arrowHead"
                d="M770 16 L790 16 M780 8 L790 16 L780 24"
                className="stroke-current text-foreground"
                strokeWidth="3.5"
                fill="none"
              />
              <line
                x1="2%"
                y1="16"
                x2="98%"
                y2="16"
                className="stroke-current text-foreground"
                strokeWidth="3.5"
              />
            </svg>
          </div>

          {/* 時程 */}
          <div className="flex justify-between">
            <div className="z-10 w-min">
              <svg className="h-10 w-10">
                <circle
                  key={1}
                  cx={10}
                  cy="16"
                  r="8"
                  className="fill-current text-primary"
                />
              </svg>
              <span className="material-icons-big">flag</span>
              <p>2024-11-23</p>
              <h3 className="w-max text-h3">開始徵稿</h3>
            </div>

            <div className="z-10 w-min">
              <svg className="h-10 w-10">
                <circle
                  key={1}
                  cx={10}
                  cy="16"
                  r="8"
                  className="fill-current text-primary"
                />
              </svg>
              <span className="material-icons-big text-foreground">
                event_busy
              </span>
              <p>01-21 23:59</p>
              <h3 className="w-max text-h3">投稿截止</h3>
            </div>

            <div className="z-10 w-min">
              <svg className="h-10 w-10">
                <circle
                  key={1}
                  cx={10}
                  cy="16"
                  r="8"
                  className="fill-current text-primary"
                />
              </svg>
              <span className="material-icons-big">email</span>
              <p>一月下旬</p>
              <h3 className="w-max text-h3">錄取通知</h3>
            </div>

            {isPoster ? (
              <div className="z-10 w-min">
                <svg className="h-10 w-10">
                  <circle
                    key={1}
                    cx={10}
                    cy="16"
                    r="8"
                    className="fill-current text-primary"
                  />
                </svg>
                <span className="material-icons-big">route</span>
                <p>02-16</p>
                <h3 className="w-max text-h3">錄取海報檔案上傳截止</h3>
              </div>
            ) : (
              <>
                <div className="z-10 w-min">
                  <svg className="h-10 w-10">
                    <circle
                      key={1}
                      cx={10}
                      cy="16"
                      r="8"
                      className="fill-current text-primary"
                    />
                  </svg>
                  <span className="material-icons-big">mic_none</span>
                  <p className="w-max">二月</p>
                  <h3 className="w-max text-h3">試講</h3>
                </div>
                <div className="z-10 w-min">
                  <svg className="h-10 w-10">
                    <circle
                      key={1}
                      cx={10}
                      cy="16"
                      r="8"
                      className="fill-current text-primary"
                    />
                  </svg>
                  <span className="material-icons-big">route</span>
                  <p>03-07</p>
                  <h3 className="w-max text-h3">彩排</h3>
                </div>
              </>
            )}

            <div className="z-10 w-min">
              <svg className="h-10 w-10">
                <circle
                  key={1}
                  cx={10}
                  cy="16"
                  r="8"
                  className="fill-current text-primary"
                />
              </svg>
              <span className="material-icons-big text-foreground">groups</span>
              <p>03-08</p>
              <h3 className="w-max text-h3">年會</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mx-auto tracking-wider md:hidden">
        <ul className="list-disc space-y-4 pl-5">
          <li>
            <span className="font-bold">開始徵稿</span>
            ：2024 年 11 月 22 日（六）
          </li>
          <li>
            <span className="font-bold">投稿截止</span>
            ：2025 年 1 月 21 日（二） 23:59
          </li>
          <li>
            <span className="font-bold">錄取通知</span>
            ：2025 年一月下旬
          </li>
          {isPoster ? (
            <>
              <li>
                <span className="font-bold">錄取海報檔案上傳截止</span>
                ：2025 年 2 月 16 日（日）
              </li>
            </>
          ) : (
            <>
              <li>
                <span className="font-bold">試講</span>
                ：2025 年二月
              </li>
              <li>
                <span className="font-bold">彩排</span>
                ：2025 年 3 月 7 日（五）
              </li>
            </>
          )}
          <li>
            <span className="font-bold">年會</span>
            ：2025 年 3 月 8 日（六）
          </li>
        </ul>
      </div>
    </>
  );
}
