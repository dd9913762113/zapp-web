// 群组聊天
//
// @author jaysunxiao
// @version 1.0
// @since 2020-04-21 18:20
const EditGroupMessageNotice = function(channelId, chatMessage, groupId, messageId) {
    this.channelId = channelId; // long
    this.chatMessage = chatMessage; // java.lang.String
    this.groupId = groupId; // long
    this.messageId = messageId; // long
};

EditGroupMessageNotice.prototype.protocolId = function() {
    return 19005;
};

EditGroupMessageNotice.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.channelId);
    byteBuffer.writeString(packet.chatMessage);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.messageId);
};

EditGroupMessageNotice.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new EditGroupMessageNotice();
    const result0 = byteBuffer.readLong();
    packet.channelId = result0;
    const result1 = byteBuffer.readString();
    packet.chatMessage = result1;
    const result2 = byteBuffer.readLong();
    packet.groupId = result2;
    const result3 = byteBuffer.readLong();
    packet.messageId = result3;
    return packet;
};

export default EditGroupMessageNotice;
