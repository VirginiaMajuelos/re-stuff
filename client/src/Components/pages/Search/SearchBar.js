import React, {useState, useEffect} from 'react';

function SearchBar(props) {
	const [searchText, setSearchText] = useState("")
	const [city, setCity] = useState("")

	const handleSelect =  (e) => {
		setCity(e.currentTarget.value)
	}

	const handleSearch = (e) => {
		setSearchText(e.currentTarget.value)
	}
	
	useEffect(() => {
		props.searchProduct(searchText, city)
	}, [searchText, city])



	return (
		<div>
			<div className="search-container">
			   <input className="search-input" type="search" placeholder="What are you looking for?" name="search" onChange={handleSearch}/>
			
			<label for="city">City: </label>
			<select class="search-input2" id="city" name="city" onChange={handleSelect}>
				<option value=''>Select your city</option>
					<option value="ÁLAVA">Álava</option>
					<option value="ALBACETE">Albacete</option>
					<option value="ALICANTE">Alicante</option>
					<option value="ALMERÍA">Almería</option>
					<option value="ASTURIAS">Asturias</option>
					<option value="ÁVILA">Ávila</option>
					<option value="BADAJOZ">Badajoz</option>
					<option value="BARCELONA">Barcelona</option>
					<option value="BURGOS">Burgos</option>
					<option value="CÁCERES">Cáceres</option>
					<option value="CÁDIZ">Cádiz</option>
					<option value="CANTABRIA">Cantabria</option>
					<option value="CASTELLÓN">Castellón</option>
					<option value="CIUDAD REAL">Ciudad Real</option>
					<option value="CÓRDOBA">Córdoba</option>
					<option value="LA CORUÑA">La Coruña</option>
					<option value="CUENCA">Cuenca</option>
					<option value="GERONA">Gerona</option>
					<option value="GRANADA">Granada</option>
					<option value="GUADALAJARA">Guadalajara</option>
					<option value="GUIPÚZCOA">Guipúzcoa</option>
					<option value="HUELVA">Huelva</option>
					<option value="HUESCA">Huesca</option>
					<option value="BALEARES">Baleares</option>
					<option value="JAÉN">Jaén</option>
					<option value="LEÓN">León</option>
					<option value="LÉRIDA">Lérida</option>
					<option value="LUGO">Lugo</option>
					<option value="MADRID">Madrid</option>
					<option value="MÁLAGA">Málaga</option>
					<option value="MURCIA">Murcia</option>
					<option value="NAVARRA">Navarra</option>
					<option value="ORENSE">Orense</option>
					<option value="PALENCIA">Palencia</option>
					<option value="LAS PALMAS">Las Palmas</option>
					<option value="PONTEVEDRA">Pontevedra</option>
					<option value="LA RIOJA">La Rioja</option>
					<option value="SALAMANCA">Salamanca</option>
					<option value="SEGOVIA">Segovia</option>
					<option value="SEVILLA">Sevilla</option>
					<option value="SORIA">Soria</option>
					<option value="TARRAGONA">Tarragona</option>
					<option value="SANTA CRUZ DE TENERIFE">Santa Cruz de Tenerife</option>
					<option value="TERUEL">Teruel</option>
					<option value="TOLEDO">Toledo</option>
					<option value="VALENCIA">Valencia</option>
					<option value="VALLADOLID">Valladolid </option>
					<option value="VIZCAYA">Vizcaya</option>
					<option value="ZAMORA">Zamora</option>
					<option value="ZARAGOZA">Zaragoza</option>
			</select>
			</div>
		</div>
	);
}

export default SearchBar;