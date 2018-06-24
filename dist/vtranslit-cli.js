'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _utils=require('./utils');var _vtranslit=require('vtranslit');var _vtranslitSchemeDeva=require('vtranslit-scheme-deva');var _vtranslitSchemeItrn=require('vtranslit-scheme-itrn');var _vtranslitSchemeKnda=require('vtranslit-scheme-knda');var _vtranslitSchemeTaml=require('vtranslit-scheme-taml');var _vtranslitSchemeTelu=require('vtranslit-scheme-telu');var _writeOutput=require('./write-output');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var VTranslitCli=function(){function VTranslitCli(fromScheme,toScheme,translitMode){_classCallCheck(this,VTranslitCli);this.vtranslit=(0,_vtranslit.vTranslit)([_vtranslitSchemeDeva.vTranslitSchemeDeva,_vtranslitSchemeItrn.vTranslitSchemeItrn,_vtranslitSchemeKnda.vTranslitSchemeKnda,_vtranslitSchemeTaml.vTranslitSchemeTaml,_vtranslitSchemeTelu.vTranslitSchemeTelu]);this.vt=this.vtranslit.init(fromScheme,toScheme,{translitMode:translitMode})}_createClass(VTranslitCli,[{key:'file',value:function file(inputFilePath,outputFilePath){var _this=this;(0,_utils.readFile)(inputFilePath,function(readError,data){if(readError){throw new Error(readError)}var output=_this.vt(data);(0,_writeOutput.writeOutput)(output,outputFilePath)})}},{key:'find',value:function find(str){(0,_utils.print)(this.vtranslit.find(str))}},{key:'string',value:function string(str){var outputFilePath=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';if(str){var output=this.vt(str);return(0,_writeOutput.writeOutput)(output,outputFilePath)}return(0,_utils.print)('Provide a string to transliterate.')}}]);return VTranslitCli}();exports.default=VTranslitCli;;