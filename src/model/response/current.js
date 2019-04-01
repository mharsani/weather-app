const responseCurrent = r => {
    let response = {
        timezone: r.data.data[0].timezone,
        state_code: r.data.data[0].state_code,
        country_code: r.data.data[0].country_code,
        city_name: r.data.data[0].city_name,
        lat: r.data.data[0].lat,
        lon: r.data.data[0].lon,
        rh: r.data.data[0].rh,
        wind_spd: r.data.data[0].wind_spd,
        vis: r.data.data[0].vis,
        slp: r.data.data[0].slp,
        dni: r.data.data[0].dni,
        elev_angle: r.data.data[0].elev_angle,
        pres: r.data.data[0].pres,
        h_angle: r.data.data[0].h_angle,
        dewpt: r.data.data[0].dewpt,
        snow: r.data.data[0].snow,
        uv: r.data.data[0].uv,
        solar_rad: r.data.data[0].solar_rad,
        wind_dir:r.data.data[0].wind_dir,
        weather: {
            icon:  r.data.data[0].weather.icon,
            code:  r.data.data[0].weather.code,
            description: r.data.data[0].weather.description
        },
        ghi: r.data.data[0].ghi,
        dhi: r.data.data[0].dhi,
        app_temp: r.data.data[0].app_temp,
        datetime: r.data.data[0].datetime,
        temp: r.data.data[0].temp,
        precip: r.data.data[0].precip,
        clouds: r.data.data[0].clouds,
        ts: r.data.data[0].ts
        
    };
  
    return response;
  };

  export default responseCurrent;