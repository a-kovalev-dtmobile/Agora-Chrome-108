import AgoraRTC from 'agora-rtc-sdk-ng'

export const useRtc = () => {
  const joinRtc = async () => {
    const appId = process.env.REACT_APP_AGORA_APP_ID

    const devices = await AgoraRTC.getDevices()

    const client = AgoraRTC.createClient({
      codec: 'vp8',
      mode: 'rtc',
    })

  }

  return { joinRtc }
}