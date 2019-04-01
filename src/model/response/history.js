const responseHistory = r => {
    let response = {
        timezone: r.data.timezone,
        state_code: r.data.state_code,
        country_code: r.data.country_code,
        city_id: r.data.city_id,
        city_name: r.data.city_name,
        lat: r.data.lat,
        lon: r.data.lon,
        sources: r.data.sources,
        station_id: r.data.station_id,
        data: r.data.data.map(
            ({
              rh,
              wind_spd,
              timestamp_utc,
              vis,
              slp,
              dni,
              elev_angle,
              pres,
              h_angle,
              dewpt,
              snow,
              uv,
              solar_rad,
              wind_dir,
              weather,
              ghi,
              dhi,
              timestamp_local,
              app_temp,
              azimuth,
              datetime,
              temp,
              precip,
              clouds,
              ts
            }) => ({
                rh,
                wind_spd,
                timestamp_utc,
                vis,
                slp,
                dni,
                elev_angle,
                pres,
                h_angle,
                dewpt,
                snow,
                uv,
                solar_rad,
                wind_dir,
                weather: {
                    icon:  weather.icon,
                    code:  weather.code,
                    description: weather.description
                },
                ghi,
                dhi,
                timestamp_local,
                app_temp,
                azimuth,
                datetime,
                temp,
                precip,
                clouds,
                ts
              })
          )
        
    };
  
    return response;
  };

  export default responseHistory;