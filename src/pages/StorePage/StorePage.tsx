import HeroSection from "@components/HeroSection/HeroSection";

function StorePage() {
  const arrNumders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <HeroSection viewType={"other"}>Магазин</HeroSection>
      <section
        style={{
          padding: "60px 78px",
          background: "#252525",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "24px",
            width:"1284px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              width: "312px",
              height: "758px",
              border: "1px solid #d7d7d7",
              borderRadius: "16px",
              padding: "20px 26px",
            }}
          >
            <h2 style={{ color: "#d7d7d7" }}>Фільтр</h2>
          </div>
          <div
            style={{
              width: "948px",
              height: "1708px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "24px",
              }}
            >
              <input
                type="text"
                id="search"
                placeholder="search"
                style={{
                  width: "200px",
                  height: "40px",
                  border: "1px solid #d7d7d7",
                  borderRadius: "24px",
                  padding: "8px 12px",
                }}
              />
              <div style={{ display: "flex", gap: "24px" }}>
                <button
                  style={{
                    border: "1px solid #d7d7d7",
                    borderRadius: "24px",
                    padding: "8px 12px",
                  }}
                >
                  Фільтр
                </button>
                <div
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <h4 style={{ color: "#d7d7d7" }}>Сортувати за</h4>
                  <select
                    name=""
                    id=""
                    style={{
                      width: "311px",
                      height: "40px",
                      border: "1px solid #d7d7d7",
                      borderRadius: "24px",
                      padding: "8px 12px",
                    }}
                  ></select>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                width: "100%",
              }}
            >
              {arrNumders &&
                arrNumders.map((item) => (
                  <div
                    style={{
                      width: "302px",
                      height: "396px",
                      borderRadius: "16px",
                    }}
                    key={item}
                  >
                    <div
                      style={{
                        width: "302px",
                        height: "336px",
                        marginBottom: "8px",
                        background: "#b7b7b7",
                        borderRadius: "16px",
                      }}
                    >
                      {/* <img src="" alt="" style={{ border:"none" }} /> */}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      <h5
                        style={{
                          width: "100%",
                          height: "24px",
                          color: "#d7d7d7",
                        }}
                      >
                        Назва продукту
                      </h5>
                      <p
                        style={{
                          width: "100%",
                          height: "24px",
                          color: "#d7d7d7",
                        }}
                      >
                        324 грн
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StorePage;
