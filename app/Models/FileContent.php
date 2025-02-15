<?php

namespace App\Models;


use App\Module\Base;
use Illuminate\Database\Eloquent\SoftDeletes;
use Response;

/**
 * App\Models\FileContent
 *
 * @property int $id
 * @property int|null $fid 文件ID
 * @property string|null $content 内容
 * @property string|null $text 内容（主要用于文档类型搜索）
 * @property int|null $size 大小(B)
 * @property int|null $userid 会员ID
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|FileContent newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FileContent newQuery()
 * @method static \Illuminate\Database\Query\Builder|FileContent onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|FileContent query()
 * @method static \Illuminate\Database\Eloquent\Builder|FileContent whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FileContent whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FileContent whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FileContent whereFid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FileContent whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FileContent whereSize($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FileContent whereText($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FileContent whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FileContent whereUserid($value)
 * @method static \Illuminate\Database\Query\Builder|FileContent withTrashed()
 * @method static \Illuminate\Database\Query\Builder|FileContent withoutTrashed()
 * @mixin \Eloquent
 */
class FileContent extends AbstractModel
{
    use SoftDeletes;

    /**
     * 获取格式内容（或下载）
     * @param File $file
     * @param $content
     * @param $download
     * @return array|\Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public static function formatContent($file, $content, $download = false)
    {
        $name = $file->ext ? "{$file->name}.{$file->ext}" : null;
        $content = Base::json2array($content ?: []);
        if (in_array($file->type, ['word', 'excel', 'ppt'])) {
            if (empty($content)) {
                return Response::download(resource_path('assets/statics/office/empty.' . str_replace(['word', 'excel', 'ppt'], ['docx', 'xlsx', 'pptx'], $file->type)), $name);
            }
            return Response::download(public_path($content['url']), $name);
        }
        if (empty($content)) {
            $content = match ($file->type) {
                'document' => [
                    "type" => $file->ext,
                    "content" => "",
                ],
                default => json_decode('{}'),
            };
            if ($download) {
                abort(403, "This file is empty.");
            }
        } else {
            $content['preview'] = false;
            if ($file->ext) {
                $filePath = public_path($content['url']);
                $fileType = $file->type;
                if ($fileType == 'document')
                {
                    // 文本
                    $content = [
                        'type' => $file->ext,
                        'content' => file_get_contents($filePath)
                    ];
                }
                elseif ($fileType == 'drawio')
                {
                    // 图表
                    $content = [
                        'xml' => file_get_contents($filePath)
                    ];
                }
                elseif ($fileType == 'mind')
                {
                    // 思维导图
                    $content = Base::json2array(file_get_contents($filePath));
                }
                elseif (in_array($fileType, ['txt', 'code']) && $file->size < 2 * 1024 * 1024)
                {
                    // 其他文本和代码（限制2M内的文件，支持编辑）
                    $content['content'] = file_get_contents($filePath);
                }
                else
                {
                    // 支持预览
                    if (in_array($fileType, ['picture', 'image', 'tif', 'media'])) {
                        $url = Base::fillUrl($content['url']);
                    } else {
                        $url = 'http://' . env('APP_IPPR') . '.3/' . $content['url'];
                    }
                    $content['url'] = base64_encode($url);
                    $content['preview'] = true;
                }
            }
            if ($download) {
                if (isset($filePath)) {
                    return Response::download($filePath, $name);
                } else {
                    abort(403, "This file not support download.");
                }
            }
        }
        return Base::retSuccess('success', [ 'content' => $content ]);
    }
}
