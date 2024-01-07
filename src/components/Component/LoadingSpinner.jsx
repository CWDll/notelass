import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader"; //설치한 cliploader을 import한다

function LoadingSpinner() {
  const [loading, setLoading] = useState(false);

 return (
    <div>
      <div>
        {loading ? (
          <div className='container'>
            <ClipLoader
              color='#f88c6b'
              loading={loading} //useState로 관리
              size={150}
            />
          </div>
        ) : (
          <div className='container'>
            <WeatherBox weather={weather} />
            <WeatherButton cities={cities} setCity={setCity} />
          </div>
        )}
      </div>
    </div>
  );
}

export default LoadingSpinner;