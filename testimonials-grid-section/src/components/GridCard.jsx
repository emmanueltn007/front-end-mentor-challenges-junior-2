function GridCard () {
  return (
    <div className="h-full grid grid-cols-4 grid-rows-2 gap-4">
      {/* Grid 1 */}
      <div className="col-span-2 col-end-3 row-end-2 bg-[hsl(263,55%,52%)] rounded-lg">
        <div>
          <img src="" alt="" />
          <div>
            <h4>
              Daniel Clifford
            </h4>
          </div>
        </div>
      </div>

      {/* Grid 2 */}
      <div className="col-span-1 col-end-4 row-end-2 bg-[hsl(217,19%,35%)] rounded-lg">
        <div>
          <img src="" alt="" />
          <div>
            <h4>
              Jonathan Walters
            </h4>
          </div>
        </div>
      </div>

      {/* Grid 3 */}
      <div className="col-span-1 row-span-2 col-end-5 row-end-3 bg-[hsl(0,0%,100%)] rounded-lg">
        <div>
          <img src="" alt="" />
          <div>
            <h4>
              Kira Whittle
            </h4>
          </div>
        </div>
      </div>

      {/* Grid 4 */}
      <div className="col-span-2 col-end-2 row-end-3 bg-[hsl(0,0%,100%)] rounded-lg">
        <div>
          <img src="" alt="" />
          <div>
            <h4>
              Jeanette Harmon
            </h4>
          </div>
        </div>
      </div>

      {/* Grid 5 */}
      <div className="col-span-2 col-end-4 row-end-3 bg-[hsl(219,29%,14%)] rounded-lg">
        <div>
          <img src="" alt="" />
          <div>
            <h4>
              Patrick Abrams
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridCard