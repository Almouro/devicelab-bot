Object.defineProperty(exports,"__esModule",{value:true});exports.addBuildLog=exports.getBuildLogs=exports.createBuildLog=exports.MAX_STORED_BUILD=undefined;

var _nodeUuid=require('node-uuid');var _nodeUuid2=_interopRequireDefault(_nodeUuid);
var _lruCache=require('lru-cache');var _lruCache2=_interopRequireDefault(_lruCache);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var MAX_STORED_BUILD=exports.MAX_STORED_BUILD=500;

var logsCache=new _lruCache2.default({max:MAX_STORED_BUILD});

var createBuildLog=exports.createBuildLog=function createBuildLog(){
var buildId=_nodeUuid2.default.v4();
logsCache.set(buildId,[]);

return buildId;
};

var getBuildLogs=exports.getBuildLogs=function getBuildLogs(buildId){return logsCache.get(buildId);};

var addBuildLog=exports.addBuildLog=function addBuildLog(buildId,log){
console.log(log);

var buildLogs=getBuildLogs(buildId);
if(buildLogs){
buildLogs.push(log);
}
};