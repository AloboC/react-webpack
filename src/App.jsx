import { useState } from 'react';
import './App.css';

// const cart = [
// 	{ id: 1, descripcion: 'Coca Cola ligth 650ml Retornable', precio: 600, cantidad: 1 },
// 	{ id: 2, descripcion: 'Cafe Capuchino', precio: '125,000.00', cantidad: 100 },
// 	{ id: 3, descripcion: 'Pan Dulce con Pasas', precio: 1500, cantidad: 3 },
// 	{ id: 4, descripcion: 'Mani Salado', precio: 1, cantidad: 5 }
// ];

const cart = [
	{
		ID_DETALLE: -1,
		FACTURA: -1,
		PRODUCTO: 3,
		CANTIDAD: 1,
		PRECIO_UNITARIO: 1200,
		PORC_EXON: 0,
		PORC_DESC: 0,
		TIPO_IVA: 1,
		PORC_IVA: 0,
		PORC_ISERV: 0,
		CABYS: '2124203020200',
		ACTIVIDAD_ECONOMICA: '521201',
		COMENTARIO: '',
		USUARIO: 1,
		MEDIDA: 1,
		NOMBRE_PRODUCTO: 'Atun Vegetales Aurora 230gr',
		NUMERO: '001-001-001',
		CODIGO_BARRAS: '7441002644572',
		TIPO_PRODUCTO: 1,
		SUBTOTAL: 1200,
		MONTO_DESCUENTO: 0,
		MONTO_IVA: 0,
		MONTO_ISERV: 0,
		MONTO_EXENTO: 1200,
		MONTO_GRAVADO: 0,
		MONTO_EXONERADO: 0,
		MONTO_SERVICIO_EXO: 0,
		MONTO_SERVICIO_EXE: 0,
		MONTO_SERVICIO_GRAV: 0,
		MONTO_MERCANCIA_EXO: 0,
		MONTO_MERCANCIA_EXE: 1200,
		MONTO_MERCANCIA_GRAV: 0,
		MONTO_IMPUESTO_NETO: 0,
		TOTAL: 1200,
		INDEX: 0
	},
	{
		ID_DETALLE: -1,
		FACTURA: -1,
		PRODUCTO: 6,
		CANTIDAD: 1,
		PRECIO_UNITARIO: 1500,
		PORC_EXON: 0,
		PORC_DESC: 0,
		TIPO_IVA: 1,
		PORC_IVA: 0,
		PORC_ISERV: 0,
		CABYS: '2124203029900',
		ACTIVIDAD_ECONOMICA: '521201',
		COMENTARIO: '',
		USUARIO: 1,
		MEDIDA: 1,
		NOMBRE_PRODUCTO: 'Atun Trocitos Splash 140gr',
		NUMERO: '001-001-004',
		CODIGO_BARRAS: '7441002637987',
		TIPO_PRODUCTO: 1,
		SUBTOTAL: 1500,
		MONTO_DESCUENTO: 0,
		MONTO_IVA: 0,
		MONTO_ISERV: 0,
		MONTO_EXENTO: 1500,
		MONTO_GRAVADO: 0,
		MONTO_EXONERADO: 0,
		MONTO_SERVICIO_EXO: 0,
		MONTO_SERVICIO_EXE: 0,
		MONTO_SERVICIO_GRAV: 0,
		MONTO_MERCANCIA_EXO: 0,
		MONTO_MERCANCIA_EXE: 1500,
		MONTO_MERCANCIA_GRAV: 0,
		MONTO_IMPUESTO_NETO: 0,
		TOTAL: 1500,
		INDEX: 1
	},
	{
		ID_DETALLE: -1,
		FACTURA: -1,
		PRODUCTO: 1414,
		CANTIDAD: 1,
		PRECIO_UNITARIO: 2500,
		PORC_EXON: 0,
		PORC_DESC: 0,
		TIPO_IVA: 1,
		PORC_IVA: 0,
		PORC_ISERV: 0,
		CABYS: '2316100000100',
		ACTIVIDAD_ECONOMICA: '521201',
		COMENTARIO: '',
		USUARIO: 1,
		MEDIDA: 1,
		NOMBRE_PRODUCTO: 'Arroz Don Quincho 80% Grano Entero 4 kg',
		NUMERO: '003-002-006',
		CODIGO_BARRAS: '751890001775',
		TIPO_PRODUCTO: 1,
		SUBTOTAL: 2500,
		MONTO_DESCUENTO: 0,
		MONTO_IVA: 0,
		MONTO_ISERV: 0,
		MONTO_EXENTO: 2500,
		MONTO_GRAVADO: 0,
		MONTO_EXONERADO: 0,
		MONTO_SERVICIO_EXO: 0,
		MONTO_SERVICIO_EXE: 0,
		MONTO_SERVICIO_GRAV: 0,
		MONTO_MERCANCIA_EXO: 0,
		MONTO_MERCANCIA_EXE: 2500,
		MONTO_MERCANCIA_GRAV: 0,
		MONTO_IMPUESTO_NETO: 0,
		TOTAL: 2500,
		COMBO: [
			{
				PRODUCTO: 7,
				NUMERO: '001-001-005',
				DESCRIPCION: 'Atun Vegetales Splash  140gr',
				PRECIO_ADICIONAL: 0,
				R: 1,
				A: 1,
				E: 1,
				L: 1,
				PORC_IVA: 0,
				PORC_ISERV: 0,
				TIPO_IVA: 1,
				GRAVADO: 0,
				CABYS: '2124203020200',
				ACTIVIDAD_ECONOMICA: '521201',
				MEDIDA_HDA: 85,
				MEDIDA_COMERCIAL: 1,
				CODIGO_BARRAS: '7441002637963',
				TIPO_PRODUCTO: 1,
				CANTIDAD: 1,
				LVL_INFO: {
					NIVEL: 'NIVEL1',
					MARCAS: 2,
					REQUERIDO: 1
				},
				PADRE: 1414
			},
			{
				PRODUCTO: 4,
				NUMERO: '001-001-002',
				DESCRIPCION: 'Sardina Tomate Picante la Sirena 155g',
				PRECIO_ADICIONAL: 150,
				R: 1,
				A: 1,
				E: 1,
				L: 1,
				PORC_IVA: 0,
				PORC_ISERV: 0,
				TIPO_IVA: 1,
				GRAVADO: 0,
				CABYS: '2124202000000',
				ACTIVIDAD_ECONOMICA: '521201',
				MEDIDA_HDA: 85,
				MEDIDA_COMERCIAL: 1,
				CODIGO_BARRAS: '028571000694',
				TIPO_PRODUCTO: 1,
				CANTIDAD: 1,
				LVL_INFO: {
					NIVEL: 'NIVEL1',
					MARCAS: 2,
					REQUERIDO: 1
				},
				PADRE: 1414
			},
			{
				PRODUCTO: 1556,
				NUMERO: '022-006-017',
				DESCRIPCION: 'Coca Cola Light 600 ml',
				PRECIO_ADICIONAL: 200,
				R: 1,
				A: 1,
				E: 1,
				L: 1,
				PORC_IVA: 0,
				PORC_ISERV: 0,
				TIPO_IVA: 1,
				GRAVADO: 0,
				CABYS: '2449001000000',
				ACTIVIDAD_ECONOMICA: '521201',
				MEDIDA_HDA: 85,
				MEDIDA_COMERCIAL: 1,
				CODIGO_BARRAS: '7441003505483',
				TIPO_PRODUCTO: 1,
				CANTIDAD: 1,
				LVL_INFO: {
					NIVEL: 'NIVEL2',
					MARCAS: 1,
					REQUERIDO: 1
				},
				PADRE: 1414
			},
			{
				PRODUCTO: 19,
				NUMERO: '001-001-017',
				DESCRIPCION: 'Hongo Rebanado Richly 284 Gr',
				PRECIO_ADICIONAL: 100,
				R: 1,
				A: 1,
				E: 1,
				L: 1,
				PORC_IVA: 0,
				PORC_ISERV: 0,
				TIPO_IVA: 1,
				GRAVADO: 0,
				CABYS: '2139702990100',
				ACTIVIDAD_ECONOMICA: '521201',
				MEDIDA_HDA: 85,
				MEDIDA_COMERCIAL: 1,
				CODIGO_BARRAS: '7441002430083',
				TIPO_PRODUCTO: 1,
				CANTIDAD: 2,
				LVL_INFO: {
					NIVEL: 'NIVEL3',
					MARCAS: 2,
					REQUERIDO: 1
				},
				PADRE: 1414
			},
			{
				PRODUCTO: 247,
				NUMERO: '007-004-002',
				DESCRIPCION: 'Gelatina Royal Cereza 80gr',
				PRECIO_ADICIONAL: 100,
				R: 1,
				A: 1,
				E: 1,
				L: 1,
				PORC_IVA: 0,
				PORC_ISERV: 0,
				TIPO_IVA: 1,
				GRAVADO: 0,
				CABYS: '2399999000100',
				ACTIVIDAD_ECONOMICA: '521201',
				MEDIDA_HDA: 85,
				MEDIDA_COMERCIAL: 1,
				CODIGO_BARRAS: '7622300718862',
				TIPO_PRODUCTO: 1,
				CANTIDAD: 1,
				PADRE: 1414
			},
			{
				PRODUCTO: 179,
				NUMERO: '005-004-006',
				DESCRIPCION: 'Galletas Choco Fresa Recreo Pozuelo Paq 12',
				PRECIO_ADICIONAL: 100,
				R: 1,
				A: 1,
				E: 1,
				L: 1,
				PORC_IVA: 0,
				PORC_ISERV: 0,
				TIPO_IVA: 1,
				GRAVADO: 0,
				CABYS: '2341000009900',
				ACTIVIDAD_ECONOMICA: '521201',
				MEDIDA_HDA: 85,
				MEDIDA_COMERCIAL: 1,
				CODIGO_BARRAS: '086581020026',
				TIPO_PRODUCTO: 1,
				CANTIDAD: 1,
				PADRE: 1414
			}
		],
		INDEX: 2
	}
];

const App = () => {
	// const [name, setName] = useState('');

	const openPanel = (e) => {
		e.preventDefault();
		let panels = [...document.querySelectorAll('.shoppin-cart-item-child.body.panel')];
		panels.forEach((panel) => {
			panel.classList.remove('active');
		});
		let item = e.target;
		while (!item.classList.contains('item-p')) {
			item = item.parentNode;
		}
		item.children[3].classList.add('active');
	};

	/**********
	 * RETURN *
	 **********/
	return (
		<div className="container">
			<div className="shoppin-cart">
				<li className="shoppin-cart-item">
					<span className="shoppin-cart-item-child header desc">Descripción</span>
					<span className="shoppin-cart-item-child header cant">Cant</span>
					<span className="shoppin-cart-item-child header price">Prec</span>
				</li>
				{cart.map((item) =>
					item.COMBO ? (
						<li key={`linea_${item.INDEX}`} className="shoppin-cart-item item-p" onClick={(e) => openPanel(e)}>
							<span className="shoppin-cart-item-child body desc">🍔 {item.NOMBRE_PRODUCTO}</span>
							<span className="shoppin-cart-item-child body cant">{item.CANTIDAD}</span>
							<span className="shoppin-cart-item-child body price">{item.PRECIO_UNITARIO}</span>
							<span className="shoppin-cart-item-child body panel">opciones</span>

							{/* hay que meter los productos del combo */}
							<div className="shoppin-cart-item-combo">
								{item.COMBO.map((combo) => (
									<div key={`combo_${combo.PRODUCTO}`} className="shoppin-cart-item">
										<span className="shoppin-cart-item-child body combo desc">{combo.DESCRIPCION}</span>
										<span className="shoppin-cart-item-child body combo cant">{combo.CANTIDAD}</span>
										<span className="shoppin-cart-item-child body combo price">🍔</span>
										{/* <span className="shoppin-cart-item-child body combo price">{combo.PRECIO_ADICIONAL}</span> */}
									</div>
								))}
							</div>
						</li>
					) : (
						<li key={`linea_${item.INDEX}`} className="shoppin-cart-item item-p" onClick={(e) => openPanel(e)}>
							<span className="shoppin-cart-item-child body desc">{item.NOMBRE_PRODUCTO}</span>
							<span className="shoppin-cart-item-child body cant">{item.CANTIDAD}</span>
							<span className="shoppin-cart-item-child body price">{item.PRECIO_UNITARIO}</span>
							<span className="shoppin-cart-item-child body panel">opciones</span>
						</li>
					)
				)}
			</div>

			{/*	<h1>Hello world!!</h1>
			<form className="row g-3 needs-validation" novalidate>

				<div className="col-md-4">
					<label htmlFor="validationCustom01" className="form-label">
						First name
					</label>
					<input
						type="text"
						className="form-control form-control-sm"
						id="validationCustom01"
						defaultValue=""
						required
					/>
					<div className="valid-feedback">Looks good!</div>
				</div>

				<div className="col-md-4">
					<label htmlFor="validationCustom02" className="form-label">
						Last name
					</label>
					<input
						type="text"
						className="form-control form-control-sm"
						id="validationCustom02"
						defaultValue="Otto"
						required
					/>
					<div className="valid-feedback">Looks good!</div>
				</div>

				<div className="col-md-4">
					<label htmlFor="validationCustomUsername" className="form-label">
						Username
					</label>
					<div className="input-group has-validation">
						<span className="input-group-text" id="inputGroupPrepend">
							@
						</span>
						<input
							type="text"
							className="form-control form-control-sm"
							id="validationCustomUsername"
							aria-describedby="inputGroupPrepend"
							required
						/>
						<div className="invalid-feedback">Please choose a username.</div>
					</div>
				</div>
				
				<div className="col-md-6">
					<label htmlFor="validationCustom03" className="form-label">
						City
					</label>
					<input
						type="text"
						className="form-control form-control-sm"
						id="validationCustom03"
						required
					/>
					<div className="invalid-feedback">Please provide a valid city.</div>
				</div>

				<div className="col-md-3">
					<label htmlFor="validationCustom04" className="form-label">
						State
					</label>
					<select className="form-select" id="validationCustom04" required>
						<option selected disabled value>
							Choose...
						</option>
						<option>...</option>
					</select>
					<div className="invalid-feedback">Please select a valid state.</div>
				</div>

				<div className="col-md-3">
					<label htmlFor="validationCustom05" className="form-label">
						Zip
					</label>
					<input
						type="text"
						className="form-control form-control-sm"
						id="validationCustom05"
						required
					/>
					<div className="invalid-feedback">Please provide a valid zip.</div>
				</div>
				<div className="col-12">
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							defaultValue
							id="invalidCheck"
							required
						/>
						<label className="form-check-label" htmlFor="invalidCheck">
							Agree to terms and conditions
						</label>
						<div className="invalid-feedback">
							You must agree before submitting.
						</div>
					</div>
				</div>
				<div className="col-12">
					<button className="btn btn-primary" type="submit">
						Submit form
					</button>
					<button className="btn btn-danger" type="reset">
						Cancelar
					</button>
				</div>
			</form> */}
		</div>
	);
};

export default App;
