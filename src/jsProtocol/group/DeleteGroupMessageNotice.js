// 群组聊天
//
// @author jaysunxiao
// @version 1.0
// @since 2020-04-21 18:20
const DeleteGroupMessageNotice = function(channelId, groupId, messageId) {
    this.channelId = channelId; // long
    this.groupId = groupId; // long
    this.messageId = messageId; // long
};

DeleteGroupMessageNotice.prototype.protocolId = function() {
    return 19004;
};

DeleteGroupMessageNotice.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.messageId);
};

DeleteGroupMessageNotice.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new DeleteGroupMessageNotice();
    const result0 = byteBuffer.readLong();
    packet.channelId = result0;
    const result1 = byteBuffer.readLong();
    packet.groupId = result1;
    const result2 = byteBuffer.readLong();
    packet.messageId = result2;
    return packet;
};

export default DeleteGroupMessageNotice;
