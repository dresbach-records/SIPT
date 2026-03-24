import {
  getAllCortes as getAllCortesService,
  createCorte as createCorteService,
  updateCorte as updateCorteService,
  deleteCorte as deleteCorteService
} from '../services/corteService.js';

export const getAllCortes = async (req, res) => {
  try {
    const cortes = await getAllCortesService();
    res.json(cortes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCorte = async (req, res) => {
  try {
    const { lote_id, quantidade_cortada, desperdicio, data } = req.body;
    const corte = await createCorteService(lote_id, quantidade_cortada, desperdicio, data);
    res.status(201).json(corte);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCorte = async (req, res) => {
  try {
    const { id } = req.params;
    const { lote_id, quantidade_cortada, desperdicio, data } = req.body;
    const corte = await updateCorteService(id, lote_id, quantidade_cortada, desperdicio, data);
    res.json(corte);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCorte = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCorteService(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
