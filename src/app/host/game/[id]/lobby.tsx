import { Participant, supabase } from '@/types/types'
import { useQRCode } from 'next-qrcode'

export default function Lobby({
  participants: participants,
  gameId,
}: {
  participants: Participant[]
  gameId: string
}) {
  const { Canvas } = useQRCode()

  const onClickStartGame = async () => {
    const { data, error } = await supabase
      .from('games')
      .update({ phase: 'quiz' })
      .eq('id', gameId)
    if (error) {
      return alert(error.message)
    }
  }

  return (
    
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-between m-auto bg-black p-12">
        <div className="w-96">
          <div className="flex justify-start flex-wrap pb-4">
            
            {participants.map((participant) => (
              <div
                className="text-xl m-2 p-2 bg-sky-500"
                key={participant.id}
              >
                {participant.nickname}
              </div>
            ))}
          </div>

          <button
            className="mx-auto bg-white py-4 px-12 block text-black"
            onClick={onClickStartGame}
          >
            Start Game
          </button>
        </div>
        <div className="pl-4">
          {/* <img src="/qr.png" alt="QR code" /> http://3.67.12.136:3001/game/24e2a2f1-1e62-45cf-b319-6fd5345fba85*/}
          <Canvas
            text={`http://3.67.12.136:3001/game/${gameId}`}

            options={{
              errorCorrectionLevel: 'M',
              margin: 3,
              scale: 4,
              width: 400,
            }}
          />
        </div>
      </div>
    </div>
  )
}
