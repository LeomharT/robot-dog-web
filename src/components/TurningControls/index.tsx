import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function TurningControls() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>转向控制</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='w-40 flex flex-col gap-3.5'>
          <Button className='w-full h-17 cursor-pointer' variant='secondary'>
            左转
          </Button>
          <Button className='w-full h-17 cursor-pointer' variant='secondary'>
            右转
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
