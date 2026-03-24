import {
  getAllLotes as getAllLotesService,
  createLote as createLoteService,
  updateLote as updateLoteService,
  deleteLote as deleteLoteService
} from '../services/loteService.js';

export const getAllLotes = async (req, res) => {
  try {
    const lotes = await getAllLotesService();
    res.json(lotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createLote = async (req, res) => {
  try {
    const { tipo_tecido, metragem, data_producao, status } = req.body;
    const lote = await createLoteService(tipo_tecido, metragem, data_producao, status);
    res.status(201).json(lote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateLote = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo_tecido, metragem, data_producao, status } = req.body;
    const lote = await updateLoteService(id, tipo_tecido, metragem, data_producao, status);
    res.json(lote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteLote = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteLoteService(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
