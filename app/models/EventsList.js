exports.definition = {
	config: {
		"URL": "https://mysterious-tor-14838.herokuapp.com/api/event",
		//"debug": 1,
		"adapter": {
			"type": "restapi",
			"collection_name": "EventsList",
			"idAttribute": "id"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {});
		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {});
		return Collection;
	}
};
