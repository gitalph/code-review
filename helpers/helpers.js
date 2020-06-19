exports.findOne = async (userId, data) => data.find(({ _id: id }) => id === userId);

exports.findAll = async (data) => data;
