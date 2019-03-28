const responseHistory = data => {
    let response = {
        timezone,
        state_code,
        country_code,
        lat,
        lon,
        city_name,
        station_id,
        rh: data.rh,
        wind_spd: data.wind_spd,
        timestamp_utc: data.timestamp_utc,
        vis: data.vis,
        slp: data.slp,
        dni: data.dni,
        elev_angle:  data.elev_angle,
        pres: data.pres,
        h_angle: data.h_angle,
        dewpt: data.dewpt,
        snow: data.snow,
        uv: data.uv,
        solar_rad: data.solar_rad,
        wind_dir: data.wind_dir,
        weather: {
        icon: data.weather.icon,
        code: data.weather.code,
        description: data.weather.description
        },
        ghi: data.ghi,
        dhi: data.dhi,
        timestamp_local: data.timestamp_local,
        app_temp: data.app_temp,
        azimuth: data.azimuth,
        datetime: data.datetime,
        temp: data.temp,
        precip: data.precip,
        clouds: data.clouds,
        ts: data.ts
    };
  
    return response;
  };

  export default responseHistory;