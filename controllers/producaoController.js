import {
  getAllProducao as getAllProducaoService,
  createProducao as createProducaoService,
  updateProducao as updateProducaoService,
  deleteProducao as deleteProducaoService
} from '../services/producaoService.js';

export const getAllProducao = async (req, res) => {
  try {
    const producao = await getAllProducaoService();
    res.json(producao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProducao = async (req, res) => {
  try {
    const { modelo, quantidade, tempo_producao, data } = req.body;
    const producao = await createProducaoService(modelo, quantidade, tempo_producao, data);
    res.status(201).json(producao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProducao = async (req, res) => {
  try {
    const { id } = req.params;
    const { modelo, quantidade, tempo_producao, data } = req.body;
    const producao = await updateProducaoService(id, modelo, quantidade, tempo_producao, data);
    res.json(producao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProducao = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteProducaoService(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
