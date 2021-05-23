import ProtocolManager from '../../ProtocolManager.js';
// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 15:33
const CreateChannelBoxResponse = function(groupVO) {
    this.groupVO = groupVO; // com.zfoo.app.zapp.common.protocol.group.model.GroupVO
};

CreateChannelBoxResponse.prototype.protocolId = function() {
    return 18301;
};

CreateChannelBoxResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    ProtocolManager.getProtocol(18000).writeObject(byteBuffer, packet.groupVO);
};

CreateChannelBoxResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new CreateChannelBoxResponse();
    const result0 = ProtocolManager.getProtocol(18000).readObject(byteBuffer);
    packet.groupVO = result0;
    return packet;
};

export default CreateChannelBoxResponse;
