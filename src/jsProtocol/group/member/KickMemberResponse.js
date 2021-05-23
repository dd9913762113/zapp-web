// @author jaysunxiao
// @version 1.0
// @since 2020-04-23 14:20
const KickMemberResponse = function(groupId, memberId) {
    this.groupId = groupId; // long
    this.memberId = memberId; // long
};

KickMemberResponse.prototype.protocolId = function() {
    return 18435;
};

KickMemberResponse.writeObject = function(byteBuffer, packet) {
    if (packet === null) {
        byteBuffer.writeBoolean(false);
        return;
    }
    byteBuffer.writeBoolean(true);
    byteBuffer.writeLong(packet.groupId);
    byteBuffer.writeLong(packet.memberId);
};

KickMemberResponse.readObject = function(byteBuffer) {
    if (!byteBuffer.readBoolean()) {
        return null;
    }
    const packet = new KickMemberResponse();
    const result0 = byteBuffer.readLong();
    packet.groupId = result0;
    const result1 = byteBuffer.readLong();
    packet.memberId = result1;
    return packet;
};

export default KickMemberResponse;
