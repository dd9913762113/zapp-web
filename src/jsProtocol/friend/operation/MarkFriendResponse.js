// @author jaysunxiao
// @version 1.0
// @since 2019-11-13 18:41
const MarkFriendResponse = function(friendId, tag) {
    // 好友id
    this.friendId = friendId; // long
    this.tag = tag; // java.lang.String
};

MarkFriendResponse.prototype.protocolId = function() {
    return 15113;
};

MarkFriendResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.friendId);
    byteBuffer.writeString(packet.tag);
};

MarkFriendResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new MarkFriendResponse();
    const result0 = byteBuffer.readLong();
    packet.friendId = result0;
    const result1 = byteBuffer.readString();
    packet.tag = result1;
    return packet;
};

export default MarkFriendResponse;
